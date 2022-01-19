// vendor
import styled from 'styled-components'

export const Knowledge = styled.div`
  width: 50px;
  height: 4px;
  margin-top: 5px;
  background-color: #d8d8d8;
`

export const Bar = styled.div`
  height: 100%;
  background-color: #8c8c8c;

  &.low {
    width: 20%;
  }

  &.mid-low {
    width: 40%;
  }

  &.mid {
    width: 60%;
  }

  &.mid-high {
    width: 80%;
  }

  &.high {
    width: 100%;
  }
`
