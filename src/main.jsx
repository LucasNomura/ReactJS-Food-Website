import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-mvyyrvfrilnpwewl.us.auth0.com"
      clientId="Zx6yqtwBZDfwsRUscknvNJ1TwCRVm17i"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </Provider>
);
