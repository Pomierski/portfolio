import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";
import styled from "styled-components";
import { StyledIcon } from "./StyledIcon";
import { Text } from "./Text/Text";
import { TransparentLink } from "./TransparentLink";

interface Props {
  repoName: string;
  repoAuthor: string;
  repoUrl: string;
  stars: number;
  contibutionsAmount?: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  background: ${(props) => props.theme.color.darkBg};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow.default};
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Contribution = ({
  repoName,
  repoAuthor,
  repoUrl,
  stars,
  contibutionsAmount = 1,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TransparentLink href={repoUrl} target="_blank">
        <HeaderWrapper>
          <Text margin="0" fontSize="sm">
            {repoName}
          </Text>
          <StyledIcon>
            <BiLinkExternal />
          </StyledIcon>
        </HeaderWrapper>
      </TransparentLink>
      <Text color="secondary" margin="0" fontSize="xs">
        / {repoAuthor}
      </Text>
      <Text>{stars}⭐</Text>
      <Text color="secondary" margin="0.5rem 0 0 0">
        {t("contributions.contributions", { count: contibutionsAmount })}
      </Text>
    </Wrapper>
  );
};
