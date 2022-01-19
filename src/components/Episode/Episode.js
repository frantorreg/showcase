// vendor
import React from "react";
import moment from "moment";
import {Translation, withTranslation} from 'react-i18next';

// styles
import {Wrapper, Logo, Content, Title, Period, PeriodDuration, Positions} from "./Episode.styled";

function Episode({ logo, title, url, position, startDate, endDate }) {
  return (
    <Translation>
      {
        t =>
          <Wrapper>
            <Logo>{logo}</Logo>
            <Content>
              <Title target="_blank" href={url}>
                {title}
              </Title>
              {(() => {
                const startDateMoment = moment(startDate);
                const endDateMoment = moment(endDate);
                return (
                  <Period>
                    {startDateMoment.format("MMMM YYYY")} — {endDate ? endDateMoment.format('MMMM YYYY') : t("main:positions.present")}
                    <PeriodDuration>
                      {moment.duration(endDateMoment.diff(startDateMoment)).humanize()}
                    </PeriodDuration>
                  </Period>
                );
              })()}
              <Positions>
                <span dangerouslySetInnerHTML={{__html: position}}/>
              </Positions>
            </Content>
          </Wrapper>
      }
    </Translation>
  );
}

export default withTranslation()(Episode);
