import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import Hotjar from '@hotjar/browser';

import Router from "./router";
import i18n from "./translation";

const siteId = 3744646;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
