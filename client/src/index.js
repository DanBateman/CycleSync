import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import config from "./config";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ToastContext from "./contexts/toast-context";

import "react-toastify/dist/ReactToastify.min.css";
import { PersistGate } from "redux-persist/integration/react";

const toastValues = {
  dark: toast.dark,
  default: toast,
  error: toast.error,
  info: toast.info,
  success: toast.success,
  warning: toast.warning,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ToastContext.Provider value={toastValues}>
      <ToastContainer
        containerId="toast-container"
        position="bottom-left"
        limit={3}
        pauseOnFocusLoss={false}
      />
      <BrowserRouter basename={config.basePath}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ToastContext.Provider>
  </StrictMode>
);
