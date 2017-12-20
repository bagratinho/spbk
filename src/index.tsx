import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { configureStore } from "./store";
import Theme from "./components/Theme";
import Main from "./components/Main";

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Theme activeTheme="default">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Theme>
  </Provider>,
  document.getElementById("root"),
);
