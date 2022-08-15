// vendor
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 15px;
  margin: 15px 0;
  padding: 20px 25px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 1.1rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &,
  > * {
    width: 45px;
    height: 45px;
  }
`;

export const Header = styled.div`
  line-height: 1.3;
`;

export const Title = styled.a`
  font-weight: bold;
  color: inherit;
`;

export const Period = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  color: #6d6d6d;
  line-height: normal;
  text-transform: lowercase;
`;

export const PeriodDuration = styled.span`
  padding: 1px 8px;
  background-color: #5d6973;
  border-radius: 20px;
  font-size: 75%;
  color: white;
  white-space: nowrap;
`;

export const Positions = styled.div`
  text-transform: lowercase;
`;

export const Achievements = styled.div`
  width: 100%;
`;

export const AchievementsList = styled.ul`
  margin: 0;
  padding-left: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 501px) {
    gap: 2px;
  }

  @media (max-width: 500px) {
    padding-left: 25px;
    gap: 5px;
  }
`;

export const Stack = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;

  > * {
    padding: 5px 15px;
    background-color: #e6e6e6;
    border-radius: 7.5px;
  }
`;

export const ContributionsLink = styled.a`
  padding: 2.5px 5px;
  color: #aeaeae;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  margin-left: 12px;
`;
