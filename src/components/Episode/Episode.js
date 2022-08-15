// vendor
import React from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

// style
import {
  Achievements,
  AchievementsList,
  ContributionsLink,
  Header,
  Logo,
  Period,
  PeriodDuration,
  Positions,
  Printable,
  Stack,
  Title,
  Wrapper,
} from "./Episode.styled";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function Episode({
  logo,
  title,
  url,
  repoUrl,
  contributionsUrl,
  position,
  startDate,
  endDate,
  achievements,
  stack,
}) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Logo>{logo}</Logo>
      <Header>
        <div>
          <Title target="_blank" href={url}>
            {title}
          </Title>
          {(repoUrl || contributionsUrl) && (
            <ContributionsLink
              target="_blank"
              href={contributionsUrl || repoUrl}
            >
              <FontAwesomeIcon icon={faCodeBranch} />
              <Printable>
                {(() => {
                  const url = new URL(repoUrl || contributionsUrl);
                  return `${url.host}${url.pathname}`;
                })()}
              </Printable>
            </ContributionsLink>
          )}
        </div>
        {startDate &&
          (() => {
            const startDateMoment = moment(startDate);
            const endDateMoment = moment(endDate);
            return (
              <Period>
                {startDateMoment.format("MMMM YYYY")}
                {endDate !== null && (
                  <>
                    {" — "}
                    {endDate
                      ? endDateMoment.format("MMMM YYYY")
                      : t("main:positions.present")}
                    <PeriodDuration>
                      {moment
                        .duration(endDateMoment.diff(startDateMoment))
                        .humanize()}
                    </PeriodDuration>
                  </>
                )}
              </Period>
            );
          })()}
        <Positions>
          <span dangerouslySetInnerHTML={{ __html: position }} />
        </Positions>
      </Header>
      {achievements && (
        <Achievements>
          {Array.isArray(achievements) ? (
            <AchievementsList>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </AchievementsList>
          ) : (
            <div>{achievements}</div>
          )}
        </Achievements>
      )}
      {stack && (
        <Stack>
          {stack.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Stack>
      )}
    </Wrapper>
  );
}
