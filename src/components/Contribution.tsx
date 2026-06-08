import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";
import styled from "styled-components";
import { StyledIcon } from "./StyledIcon";
import { Text } from "./Text/Text";
import { TransparentLink } from "./TransparentLink";

interface Props {
  repoName: string;
  repoAuthor: string;
  contributionUrl: string;
  stars: number;
  contibutionsAmount?: number;
}

export type { Props as ContributionProps };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18rem;
  background: ${(props) => props.theme.color.panel};
  padding: 1rem 1.25rem;
  border: 1px solid ${(props) => props.theme.color.border};
  font-family: ${(props) => props.theme.fontFamily.mono};
  transition: all 0.15s ease-out;

  &:hover {
    border-color: ${(props) => props.theme.color.accent};
    box-shadow: 4px 4px 0 0 ${(props) => props.theme.color.darkAccent};
    transform: translate(-2px, -2px);
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p::before {
    content: "▸ ";
    color: ${(props) => props.theme.color.accent};
  }
`;

const Stars = styled(Text)`
  &::before {
    content: "★ ";
    color: ${(props) => props.theme.color.warning};
  }
`;

const numberFormat = new Intl.NumberFormat("en-US");

export const Contribution = ({
  repoName,
  repoAuthor,
  contributionUrl: repoUrl,
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
          <StyledIcon color="#8a8a8a">
            <BiLinkExternal />
          </StyledIcon>
        </HeaderWrapper>
      </TransparentLink>
      <Text color="muted" margin="0" fontSize="xs">
        @ {repoAuthor}
      </Text>
      <Stars margin="0.5rem 0 0 0">{numberFormat.format(stars)}</Stars>
      <Text color="secondary" margin="0.25rem 0 0 0" fontSize="xs">
        {t("contributions.contributions", { count: contibutionsAmount })}
      </Text>
    </Wrapper>
  );
};
