import { useEffect } from "react";

const pageTitle = (title) => `${title} | Cycle Sync`;

const Page = (props) => {
  useEffect(() => {
    document.title = pageTitle(props.title || "");
  }, [props.title]);
  return props.children;
};

export default Page;
