import React from "react";

function RedirectLogin(props) {
  setInterval(() => {
    window.location.replace("/api/auth/logout");
  }, 5000);

  return <div>{props.mensaje}</div>;
}

export default RedirectLogin;
