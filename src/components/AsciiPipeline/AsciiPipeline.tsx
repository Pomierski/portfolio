import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

type StageStatus = "queued" | "running" | "passed" | "failed";

interface Stage {
  name: string;
  status: StageStatus;
  duration: number;
  progress: number;
}

const SPINNER = ["◴", "◷", "◶", "◵"];

const initialStages = (): Stage[] => [
  { name: "install", status: "queued", duration: 0, progress: 0 },
  { name: "lint", status: "queued", duration: 0, progress: 0 },
  { name: "build", status: "queued", duration: 0, progress: 0 },
  { name: "test", status: "queued", duration: 0, progress: 0 },
  { name: "deploy", status: "queued", duration: 0, progress: 0 },
];

const STAGE_DURATIONS = [4, 7, 9, 5, 6]; // seconds for full run
// 5% chance any stage fails (cosmetic only — restarts)
const FAIL_CHANCE = 0.06;

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.85; }
`;

const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mono};
  color: ${(props) => props.theme.color.main};
  background: ${(props) => props.theme.color.darkBg};
  border: 1px solid ${(props) => props.theme.color.border};
  padding: 1rem 1.25rem;
  font-size: 0.78rem;
  line-height: 1.5;
  width: 100%;
  max-width: 540px;
  white-space: pre;
  user-select: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${(props) => props.theme.color.accent};
    animation: ${flicker} 4s ease-in-out infinite;
  }

  @media (min-width: ${(props) => props.theme.screenSize.sm}) {
    font-size: 0.85rem;
    padding: 1.25rem 1.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed ${(props) => props.theme.color.border};
  padding-bottom: 0.5rem;
  margin-bottom: 0.85rem;
  font-size: 0.72rem;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0.02em;

  & > span:first-child {
    color: ${(props) => props.theme.color.accent};
  }
`;

const Body = styled.div`
  font-size: inherit;
  line-height: 1.5;
`;

const Footer = styled.div`
  margin-top: 0.85rem;
  border-top: 1px dashed ${(props) => props.theme.color.border};
  padding-top: 0.5rem;
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.secondary};
  display: flex;
  justify-content: space-between;
`;

const statusGlyph = (s: StageStatus, frame: number): string => {
  if (s === "queued") return "○";
  if (s === "running") return SPINNER[frame % SPINNER.length];
  if (s === "passed") return "●";
  return "✗";
};

const statusColorVar = (s: StageStatus): string => {
  if (s === "passed") return "#5cb85c";
  if (s === "running") return "#fc6d26";
  if (s === "failed") return "#e24329";
  return "#4a4a4a";
};

const progressBar = (pct: number, width = 20): string => {
  const filled = Math.round((pct / 100) * width);
  const bar = "█".repeat(filled) + "▒".repeat(Math.max(0, width - filled));
  return bar;
};

const formatDuration = (s: number): string => {
  if (s < 1) return "00:00";
  const mins = Math.floor(s / 60).toString().padStart(2, "0");
  const secs = Math.floor(s % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

const padRight = (s: string, w: number): string =>
  s.length >= w ? s.slice(0, w) : s + " ".repeat(w - s.length);

export const AsciiPipeline = () => {
  const [stages, setStages] = useState<Stage[]>(initialStages);
  const [pipelineId, setPipelineId] = useState<number>(() =>
    Math.floor(4000 + Math.random() * 999)
  );
  const [elapsed, setElapsed] = useState(0);
  const [frame, setFrame] = useState(0);
  const startedRef = useRef<number>(Date.now());

  // Spinner frame ticker (independent of pipeline progress)
  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 200);
    return () => clearInterval(id);
  }, []);

  // Pipeline progress ticker
  useEffect(() => {
    const tickMs = 100;
    const id = setInterval(() => {
      setStages((current) => {
        const next = current.map((s) => ({ ...s }));
        const runningIdx = next.findIndex((s) => s.status === "running");
        const queuedIdx = next.findIndex((s) => s.status === "queued");

        // If nothing is running, start the next queued stage
        if (runningIdx === -1) {
          if (queuedIdx === -1) {
            // All done — reset after a beat
            setTimeout(() => {
              setStages(initialStages());
              setPipelineId(Math.floor(4000 + Math.random() * 999));
              setElapsed(0);
              startedRef.current = Date.now();
            }, 2500);
            return next;
          }
          next[queuedIdx].status = "running";
          return next;
        }

        // Advance the running stage
        const stage = next[runningIdx];
        const totalSteps = (STAGE_DURATIONS[runningIdx] * 1000) / tickMs;
        stage.progress += 100 / totalSteps;

        if (stage.progress >= 100) {
          stage.progress = 100;
          // Decide pass/fail
          if (Math.random() < FAIL_CHANCE) {
            stage.status = "failed";
            // After fail, restart the whole pipeline shortly
            setTimeout(() => {
              setStages(initialStages());
              setPipelineId(Math.floor(4000 + Math.random() * 999));
              setElapsed(0);
              startedRef.current = Date.now();
            }, 2500);
          } else {
            stage.status = "passed";
            stage.duration = STAGE_DURATIONS[runningIdx];
          }
        }
        return next;
      });

      setElapsed((Date.now() - startedRef.current) / 1000);
    }, tickMs);

    return () => clearInterval(id);
  }, []);

  const allPassed = stages.every((s) => s.status === "passed");
  const anyFailed = stages.some((s) => s.status === "failed");
  const overallStatus = anyFailed
    ? "FAILED"
    : allPassed
    ? "PASSED"
    : "RUNNING";

  const overallColor = anyFailed
    ? "#e24329"
    : allPassed
    ? "#5cb85c"
    : "#fc6d26";

  return (
    <Wrapper aria-hidden="true">
      <Header>
        <span>
          ▸ pipeline #{pipelineId}{" "}
          <span style={{ color: "#4a4a4a" }}>· main · 8a3f1c2</span>
        </span>
        <span style={{ color: overallColor }}>{overallStatus}</span>
      </Header>
      <Body>
        {stages.map((s, i) => {
          const glyph = statusGlyph(s.status, frame);
          const color = statusColorVar(s.status);
          const isLast = i === stages.length - 1;

          return (
            <div key={s.name} style={{ display: "block" }}>
              <span style={{ color: "#4a4a4a" }}>
                {String(i + 1).padStart(2, "0")}
                {"  "}
              </span>
              <span style={{ color }}>{glyph}</span>{" "}
              <span style={{ color: s.status === "queued" ? "#4a4a4a" : "#e8e8e8" }}>
                {padRight(s.name, 9)}
              </span>
              {s.status === "running" ? (
                <>
                  <span style={{ color: "#fc6d26" }}>
                    [{progressBar(s.progress, 18)}]
                  </span>
                  <span style={{ color: "#8a8a8a" }}>
                    {"  "}
                    {Math.round(s.progress)}%
                  </span>
                </>
              ) : s.status === "passed" ? (
                <>
                  <span style={{ color: "#3a3a3a" }}>
                    [{"█".repeat(18)}]
                  </span>
                  <span style={{ color: "#5cb85c" }}>
                    {"  "}passed{" "}
                    <span style={{ color: "#4a4a4a" }}>
                      {formatDuration(s.duration)}
                    </span>
                  </span>
                </>
              ) : s.status === "failed" ? (
                <>
                  <span style={{ color: "#3a3a3a" }}>
                    [{"▒".repeat(18)}]
                  </span>
                  <span style={{ color: "#e24329" }}>
                    {"  "}failed
                  </span>
                </>
              ) : (
                <>
                  <span style={{ color: "#2a2a2a" }}>
                    [{"░".repeat(18)}]
                  </span>
                  <span style={{ color: "#4a4a4a" }}>{"  "}queued</span>
                </>
              )}
              {!isLast ? null : null}
            </div>
          );
        })}
      </Body>
      <Footer>
        <span>elapsed {formatDuration(elapsed)}</span>
        <span>
          {stages.filter((s) => s.status === "passed").length}/{stages.length}{" "}
          stages
        </span>
      </Footer>
    </Wrapper>
  );
};
