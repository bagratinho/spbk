import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled, {ThemeProvider, injectGlobal} from "../../styles/styled-components";
import { theme } from "../../styles";
import * as _ from "lodash";

injectGlobal`
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://fonts.googleapis.com/css?family=Comfortaa:300,400,700&amp;subset=cyrillic,cyrillic-ext");
  @import url("https://fonts.googleapis.com/css?family=Exo+2:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=cyrillic,latin-ext");
  html ,
  body {
    display: block;
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 10px;
    font-family: "Comfortaa";
  }
  #root {
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
`;

export default class Theme extends React.Component<IThemeProps, {}> {
  public render() {
    return (
      <ThemeProvider theme={_.get(theme, `${this.props.activeTheme}`, theme.default)} >
        {this.props.children}
      </ThemeProvider>
    );
  }
}

interface IThemeProps {
  activeTheme: string;
}
