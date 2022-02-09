import { motion } from "framer-motion";
import React from "react";
import styled, { useTheme } from "styled-components";
import { Theme } from "../../styles/theme";
import { CodeSnippets } from "./CodeSnippets";
import "./heroAnimation.scss";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.screenSize.lg}) {
    overflow: unset;
  }
`;

const animationLength = 7.5;
const deleyOnRepeat = 1;

const delay = [1, 2.5, 4];

const drawPath = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: [0, 1, 1, 0],
    transition: {
      duration: animationLength,
      ease: "linear",
      times: [0, 0.15, 0.75, 1],
      repeat: Infinity,
      repeatDelay: deleyOnRepeat,
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
  },
};

const translateX = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  animate: {
    scaleX: [0, 1, 1, 1],
    opacity: [0, 1, 1, 0],
    transition: {
      delay: delay[2],
      duration: animationLength - delay[2],
      ease: "easeInOut",
      times: [0, 0.3, 0.75, 1],
      repeat: Infinity,
      repeatDelay: delay[2] + deleyOnRepeat,
    },
  },
};

const transitions = [
  {
    delay: delay[0],
    duration: animationLength - delay[0],
    ease: "easeInOut",
    times: [0, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: delay[0] + deleyOnRepeat,
  },
  {
    delay: delay[1],
    duration: animationLength - delay[1],
    ease: "easeInOut",
    times: [0, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: delay[1] + deleyOnRepeat,
  },
  {
    delay: delay[2],
    duration: animationLength - delay[2],
    ease: "easeInOut",
    times: [0, 0.2, 0.8, 1],
    repeat: Infinity,
    repeatDelay: delay[2] + deleyOnRepeat,
  },
];

const HeroAnimation = () => {
  const { color } = useTheme() as Theme;
  const accentColor = color.accent;
  const darkAccentColor = color.darkAccent;
  const bodyBgColor = color.bg;
  const bgColor = color.darkAccentBg;
  return (
    <Wrapper>
      <CodeSnippets transitions={transitions} />
      <svg
        width="280"
        height="514"
        viewBox="0 0 280 514"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M250 0H30C13.4315 0 0 13.4315 0 30V484C0 500.569 13.4315 514 30 514H250C266.569 514 280 500.569 280 484V30C280 13.4315 266.569 0 250 0Z"
          fill={bodyBgColor}
        />
        <motion.path
          d="M250 1H30C13.9837 1 1 13.9837 1 30V484C1 500.016 13.9837 513 30 513H250C266.016 513 279 500.016 279 484V30C279 13.9837 266.016 1 250 1Z"
          stroke={darkAccentColor}
          stroke-opacity="0.76"
          stroke-width="2"
          variants={drawPath}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M246 13H34C21.8497 13 12 22.8497 12 35V480C12 492.15 21.8497 502 34 502H246C258.15 502 268 492.15 268 480V35C268 22.8497 258.15 13 246 13Z"
          fill={bgColor}
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[0]}
        />
        <motion.path
          d="M246 14H34C22.402 14 13 23.402 13 35V480C13 491.598 22.402 501 34 501H246C257.598 501 267 491.598 267 480V35C267 23.402 257.598 14 246 14Z"
          stroke={darkAccentColor}
          stroke-opacity="0.69"
          stroke-width="2"
          variants={drawPath}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M257 42H24C23.4477 42 23 42.4477 23 43V206C23 206.552 23.4477 207 24 207H257C257.552 207 258 206.552 258 206V43C258 42.4477 257.552 42 257 42Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[1]}
        />
        <motion.path
          d="M257 42.5H24C23.7239 42.5 23.5 42.7239 23.5 43V206C23.5 206.276 23.7239 206.5 24 206.5H257C257.276 206.5 257.5 206.276 257.5 206V43C257.5 42.7239 257.276 42.5 257 42.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[1]}
        />
        <motion.path
          d="M132 230H24C23.4477 230 23 230.448 23 231V301C23 301.552 23.4477 302 24 302H132C132.552 302 133 301.552 133 301V231C133 230.448 132.552 230 132 230Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[1]}
        />
        <motion.path
          d="M132 230.5H24C23.7239 230.5 23.5 230.724 23.5 231V301C23.5 301.276 23.7239 301.5 24 301.5H132C132.276 301.5 132.5 301.276 132.5 301V231C132.5 230.724 132.276 230.5 132 230.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[1]}
        />
        <motion.path
          d="M257 230H147C146.448 230 146 230.448 146 231V302C146 302.552 146.448 303 147 303H257C257.552 303 258 302.552 258 302V231C258 230.448 257.552 230 257 230Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[1]}
        />
        <motion.path
          d="M257 230.5H147C146.724 230.5 146.5 230.724 146.5 231V302C146.5 302.276 146.724 302.5 147 302.5H257C257.276 302.5 257.5 302.276 257.5 302V231C257.5 230.724 257.276 230.5 257 230.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={transitions[1]}
        />
        <motion.path
          d="M254 328H23V340H254V328Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M253.5 328.5H23.5V339.5H253.5V328.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M229 343H23V355H229V343Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M228.5 343.5H23.5V354.5H228.5V343.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M210 358H23V370H210V358Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M209.5 358.5H23.5V369.5H209.5V358.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M258 373H23V385H258V373Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M257.5 373.5H23.5V384.5H257.5V373.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M232 388H23V400H232V388Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M231.5 388.5H23.5V399.5H231.5V388.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M215 403H23V415H215V403Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M214.5 403.5H23.5V414.5H214.5V403.5Z"
          stroke={accentColor}
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M161 419H23V431H161V419Z"
          fill={accentColor}
          fill-opacity="0.8"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <motion.path
          d="M160.5 419.5H23.5V430.5H160.5V419.5Z"
          stroke="##DDA80A"
          stroke-opacity="0.5"
          variants={translateX}
          initial="initial"
          animate="animate"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-163.017 -43.2852) rotate(-173.913) scale(566.834 540.293)"
          >
            <stop stopColor="#FFC107" stopOpacity="0.22" />
            <stop offset="1" stopColor="#D6A40C" stopOpacity="0.22" />
          </radialGradient>
        </defs>
      </svg>
    </Wrapper>
  );
};

export default HeroAnimation;
