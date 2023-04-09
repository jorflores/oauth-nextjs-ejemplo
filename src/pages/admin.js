import React from "react";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function admin({ user }) {
  return <div>HI {user.name}</div>;
}

export default admin;

export const getServerSideProps = withPageAuthRequired();
