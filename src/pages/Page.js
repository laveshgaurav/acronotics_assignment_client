import React from "react";
import Popup from "../components/Popup/Popup";

function Page({ children }) {
  return (
    <>
      {children}
      <Popup />
    </>
  );
}

export default Page;
