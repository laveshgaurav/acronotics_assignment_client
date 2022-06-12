import MuiAlert from "@material-ui/lab/Alert";
import React from "react";
import { useSelector } from "react-redux";

function Alert(props) {
  return (
    <MuiAlert
      elevation={6}
      variant="filled"
      style={{ width: "320px" }}
      {...props}
    />
  );
}

function Popup() {
  const { popUpToggle, popUpMessage, popUpStatus } = useSelector(
    (state) => state?.Staff
  );

  // dispatch

  return (
    <>
      {popUpToggle && (
        <div
          style={{
            position: "fixed",
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert severity={popUpStatus}>{popUpMessage}</Alert>
        </div>
      )}
    </>
  );
}

export default Popup;
