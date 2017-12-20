import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, {ThemeProvider} from "../../styles/styled-components";
import { theme } from "../../styles";
import { pxToRem } from "../../styles/utils";

export default class Main extends React.Component<IMainProps, {}> {
  public render() {
    return (
      <StyledMain className="wrapper">
        <section className="sidebar">
          <h1 className="logo">
            <img src="https://content001.bet365.com/Casino/Header-V7/bet365-logo-white1.png" alt=""/>
          </h1>
         <ul className="event-category">
           <li>
             Football
           </li>
           <li>
             Volleyball
           </li>
           <li>
             Tennis
           </li>
           <li>
             Ice Hockey
           </li>
           <li>
             Football
           </li>
           <li>
             Volleyball
           </li>
           <li>
             Tennis
           </li>
           <li>
             Ice Hockey
           </li>
         </ul>
        </section>
        <section className="main">
          <header>
            <div className="search">
              <input placeholder="Search..." type="text"/>
            </div>
            <div className="header-nav">
              <button className="btn1">LOG IN</button>
              <button className="btn1">SIGN UP</button>
            </div>
          </header>
          <div className="filter-action-bar">
            <div className="category-name">
              Football
            </div>
            <div className="filter-grid">
              <div className="time-filter">
                Starts in:
                <select name="" id="">
                  <option value="">30mins</option>
                  <option value="">1hr</option>
                  <option value="">3hrs</option>
                  <option value="">6hrs</option>
                  <option value="">24hrs</option>
                </select>
              </div>
              <ul className="grid-selector">
                <li><i className="fa fa-th"></i></li>
                <li><i className="fa fa-align-justify"></i></li>
              </ul>
            </div>
          </div>
          <div className="event-list">
            <div>
              <div className="event-group">
                <h6>English Premier League</h6>
                <div className="grid-view">
                  <div className="event-view-1">
                    <div className="match-preview">
                      <div className="left">
                        <img src="https://www.onehash.com/api/media/uploaded_images/2CyBd3nAom-7_125x84_AybP2us9.png" alt=""/>
                        <span>Juventus FC</span>
                      </div>
                      <div className="center"><span className="vs">VS</span></div>
                      <div className="right">
                        <img src="https://www.onehash.com/api/media/uploaded_images/_QGcMtjGkhQo_125x84_AybP2us9.png" alt=""/>
                        <span>Genoa FC</span>
                      </div>
                    </div>
                    <div className="market">
                      <h6>Winner</h6>
                      <div className="bet-group">
                        <div>
                          1<span>1.3</span>
                        </div>
                        <div>
                          X<span>2.4</span>
                        </div>
                        <div>
                          2<span>5.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="market">
                      <h6>Total +2.5</h6>
                      <div className="bet-group">
                        <div>
                          Over<span>1.3</span>
                        </div>
                        <div>
                          Under<span>5.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="time">
                      <div className="starttime">18:50</div>
                      <div className="timeleft">00:24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-action-bar">

          </div>
        </section>
      </StyledMain>
    );
  }
}

interface IMainProps {
  className?: string;
}

const StyledMain = styled.section`
  height: 100%;
  color: ${props => props.theme.colors.scheme.c1};
  color: #333;
  height: 100%;
  background: #474747;
  font-size: 14px;
  color: #fff;
  position: relative;
  & .btn1 {
    display: block;
    appearance: none;
    border: 0;
    background: rgba(255,255,255,0);
    font-family: inherit;
    padding: 0 20px;
    cursor: pointer;
    color: #48afa1;
    border-left: solid 1px rgba(0,0,0,0.15);
    outline: none;
  }
  & .main {
    position: absolute;
    right: 0;
    left: 300px;
    & > header {
      height: 70px;
      background: rgba(0, 0, 0, 0.15);
      border-bottom: solid 1px rgba(0, 0, 0, 0.4);
      display: flex;
    }
    & .header-nav {
      display: flex;
    }
    & .search {
      padding: 15px 20px;
      width: 50%;
      margin-right: auto;
      & input {
        height: 40px;
        border: 0;
        border: solid 1px rgba(0,0,0,0.2);
        padding: 0 10px;
        border-radius: 2px;
        outline: none;
        width: 500px;
        color: #fff;
        background: rgba(0,0,0,0.3);
      }
    }

    & .bottom-action-bar {
      height: 30px;
      position: fixed;
      bottom: 0;
      left: 300px;
      right: 0;
      background: rgba(0,0,0,0.5);
    }
    & .filter-action-bar {
      height: 30px;
      position: fixed;
      top: 70px;
      left: 300px;
      right: 0;
      background: rgba(0,0,0,0.3);
      display: flex;
      color: #868686;
      & .category-name {
        width: 50%;
        margin-right: auto;
        line-height: 30px;
        padding: 0 20px;
      }
      & .filter-grid {
        display: flex;
        line-height: 30px;
        padding: 0 0 0 20px;
      }
      & .grid-selector {
        margin: 0;
        padding: 0 0 0 20px;
        display: flex;
        & li {
          display: flex;
          width: 30px;
          text-align: center;
          align-items: center;
          justify-content: center;
          border-left: solid 1px rgba(0,0,0,0.15);
        }
      }
    }
  }

  & .sidebar {
    width: ${pxToRem(300)};
    background: #252525;
    height: 100%;
    padding: ${pxToRem(20)};
    position: absolute;
    left: 0;
    box-shadow: -1px 0 15px 0 rgba(0,0,0,0.35) inset;
  }

  & .logo {
    padding: ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)} ${pxToRem(20)};
    margin: ${pxToRem(-20)} ${pxToRem(-20)} 0 ${pxToRem(-20)};
    background: rgba(0, 0, 0, 0.15);
    border-bottom: solid 1px rgba(0, 0, 0, 0.15);
    & img {
      //height: 30px;
      //display: block;
    }
  }

  & .event-category {
    margin: 0 -20px;
    padding: 0;
  }

  & .event-category li {
    padding: 17px 20px;
    line-height: 20px;
    display: block;
    cursor: pointer;
    border-bottom: solid 1px rgba(255, 255, 255, 0.07)
  }

  & .event-list {
    padding: 30px 0 30px 0;

  }

  & .event-group {
    & > h6 {
      padding: 0 20px;
      line-height: 30px;
      margin: 0;
      background: rgba(255,255,255,0.1)
    }
    & .grid-view {
      padding: 20px;
      display: grid;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      & .event-view-1 {
        background: rgba(255,255,255,0.08);
        border-radius: 4px;
        & .market {
          & > h6 {
            margin: 0;
            background: rgba(0,0,0,0.4);
            line-height: 20px;
            font-size: 12px;
            text-align: center;
          }
          & .bet-group {
            background: rgba(0,0,0,0.2);
            display: flex;
            line-height: 30px;
            font-size: 13px;
            text-align: center;
            & div {
              flex: 1;
              padding: 0 10px;
              display: flex;
              &:not(:last-child) {
                border-right: solid 1px rgba(0,0,0,0.2);
              }
              & span {
                color: #19fff4;
                margin-left: 5px;
                display: block;
                margin: 0 auto;
              }
            }
          }
        }
        & .match-preview {
          display: flex;
          overflow: hidden;
          border-bottom: solid 1px rgba(0,0,0,0.4);
          & .left,
          & .right {
            flex: 1;
            flex-direction: column;
            padding: 10px;
            & img{
              display: block;
              margin: 0 auto 10px auto;
            }
            & span {
              display: block;
              text-align: center;
            }
          }
          & .center {
            position: relative;
            & span {
              display: block;
              min-width: 41px;
              height: 41px;
              color: rgba(0,0,0,0.4);
              border: solid 1px rgba(0,0,0,0.4);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin: -20px;
              position: absolute;
              font-family: "Exo 2";
              top: 50%;
              left: 50%;
              &:before {
                left: 50%;
                bottom: -100px;
                height: 100px;
                content: "";
                width: 1px;
                position: absolute;
                display: block;
                background: rgba(0,0,0,0.4);
              }
              &:after {
                left: 50%;
                top: -100px;
                height: 100px;
                content: "";
                width: 1px;
                position: absolute;
                display: block;
                background: rgba(0,0,0,0.4);
              }
            }
          }
        }
      }
    }
  }
`;
