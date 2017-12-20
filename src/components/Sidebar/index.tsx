import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, {ThemeProvider} from "../../styles/styled-components";
import { theme } from "../../styles";

export default class Main extends React.Component<ISidebarProps, {}> {
  public render() {
    return (
      <StyledSidebar className="sidebar">

      </StyledSidebar>
    );
  }
}

interface ISidebarProps {
  something: number;
  className?: string;
}

const StyledSidebar = styled.section`
  height: 100%;
  color: ${props => props.theme.colors.scheme.c1};
`;
