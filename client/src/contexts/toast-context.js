import { createContext } from "react";

const ToastContext = createContext({
  dark: undefined,
  default: undefined,
  error: undefined,
  info: undefined,
  success: undefined,
  warning: undefined,
  handleError: () => {},
});

export default ToastContext;
