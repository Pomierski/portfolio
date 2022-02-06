import { motion, Transition } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

interface PropTypes {
  transitions: Transition[];
}

const Code = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: fit-content;
  overflow: hidden;
  color: ${(props) => props.theme.color.accent};
  white-space: pre-wrap;
  font-size: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
`;

const Pre = styled.pre`
  margin: 0;
  padding: 0;
`;

const codeSnippets = [
  `
  <div className="App">
        <ThemeProvider theme={theme}>
          <Container>
            {!userLogged ? (
              <Login setUserLogged={setUserLogged} getUserData={getUserData} />
            ) : (
              <>`,
  `
                <Notifications
                  toggleNotifications={toggleNotifications}
                  showNotifications={showNotifications}
                  clearBadgeText={clearBadgeText}
                  userNotifications={userNotifications}
                  deleteNotification={deleteNotification}
                />
                <Settings
                  showSettings={showSettings}
                  logout={logout}
                  toggleSettings={toggleSettings}
                  loggedInUser={userData ? userData.username : null}
                />`,
  `
                <Main
                  toggleSettings={toggleSettings}
                  toggleNotifications={toggleNotifications}
                  badgeText={
                    userNotifications
                      ? userNotifications.notifications.length
                      : null
                  }
                  animeList={userData ? userData.animeList : null}
                  refreshData={refreshData}
                />
              </>
            )}
          </Container>
        </ThemeProvider>
      </div>
  `,
];

export const CodeSnippets = ({ transitions }: PropTypes) => {
  return (
    <Code>
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={transitions[index]}
          initial={{ opacity: 0 }}
        >
          <SyntaxHighlighter
            language="jsx"
            style={darcula}
            customStyle={{
              background: "none",
              padding: "0 !imporant",
              margin: "0 !important",
            }}
            PreTag={Pre}
          >
            {snippet}
          </SyntaxHighlighter>
        </motion.div>
      ))}
    </Code>
  );
};
