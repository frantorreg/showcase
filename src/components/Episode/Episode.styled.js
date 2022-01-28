// vendor
import styled from 'styled-components'

// styles
import {buildMiddleMargins} from "../../styles/margins-generator.styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 15px 0;
  padding: 20px 25px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 1.1rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: normal;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &, > * {
    width: 50px;
    height: 50px;
  }
`

export const Content = styled.div`
  > * {
    ${buildMiddleMargins('5px')}
  }
`

export const Title = styled.a`
  font-weight: bold;
  color: inherit;
`

export const Period = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  color: #6d6d6d;
  line-height: normal;
  text-transform: lowercase;
`

export const PeriodDuration = styled.span`
  padding: 1px 8px;
  background-color: #5d6973;
  border-radius: 20px;
  font-size: 75%;
  color: white;
  white-space: nowrap;
`

export const Positions = styled.div`
  text-transform: lowercase;
`

export const Achievements = styled.ul`
  padding-left: 30px;

  @media (max-width: 500px) {
    padding-left: 25px;
  }
`

export const Achievement = styled.li`
  &:not(:last-child) {
    margin-bottom: 2px;

    @media (max-width: 500px) {
      margin-bottom: 5px;
    }
  }
`

export const Stack = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 15px;

  > * {
    padding: 5px 15px;
    background-color: #e6e6e6;
    border-radius: 7.5px;
  }
`
