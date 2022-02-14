import styled from 'styled-components'
import { colors } from '../../../theme'
import appLogo from '../../assets/eviteri-reverse.png'

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 8%;
  background-color: ${colors.steelGrey};
  box-shadow: 0 2px 12px 0 ${colors.mediumGrey};
  color: ${colors.lightestGrey};
  * {
    box-sizing: border-box;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SiteLogo = styled.img`
  display: inline-block;
  width: 258px;
  content: url(${appLogo});
`

export const HeaderElementsContainer = styled.div`
  display: flex;
`

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  min-width: 100px;
  position: relative;

  a,
  a:visited {
    color: white;
    text-decoration: none;
  }

  // pipe separator
  &:not(:last-child):after {
    content: '';
    border: 1px solid ${colors.steelGrey};
    box-shadow: 1px 0 0 0 ${colors.mediumGrey};
    height: 25px;
    position: absolute;
    right: 0;
  }
`

export const Navigation = styled.div`
  background-color: #1875d1;
  padding: 0 8%;
  ul {
    display: flex;
    height: 40px;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      a {
        color: white;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 16px;
        padding: 0 15px;
        &.active {
          background: #3885d3;
          font-weight: bold;
        }
      }
    }
  }
`
