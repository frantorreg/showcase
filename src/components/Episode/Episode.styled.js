// vendor
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 20px 25px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 1.1rem;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  &, > * {
    width: 50px;
    height: 50px;
  }
`

export const Content = styled.div`
  > * {
    margin: 2px 0;
  }
`

export const Title = styled.a`
  font-weight: bold;
  color: inherit;
`

export const Period = styled.div`
  color: #6d6d6d;
  text-transform: lowercase;
`

export const PeriodDuration = styled.span`
  margin-left: 8px;
  padding: 1px 8px;
  background-color: #5d6973;
  border-radius: 20px;
  font-size: 75%;
  color: white;
`

export const Positions = styled.div`
  text-transform: lowercase;
`