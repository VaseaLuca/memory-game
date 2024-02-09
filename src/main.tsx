import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { store } from "store/store.ts";
import "./app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div className="loading">Loading ...</div>}>
            <App />
          </Suspense>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
