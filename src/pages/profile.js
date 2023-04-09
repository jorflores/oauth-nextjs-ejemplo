import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Profile({ user }) {
  const { error, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    );
  }
}

export default Profile;

export const getServerSideProps = withPageAuthRequired();
