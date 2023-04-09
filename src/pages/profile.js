import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import styles from "@/styles/Home.module.css";

function Profile({ user }) {
  const userRoles = user?.[`${process.env.NEXT_PUBLIC_AUTH0_NAMESPACE}`] ?? [];

  const { error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      user && (
        <div className={styles.center}>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Roles: {String(userRoles)}</p>
          <p>{<a href="/">Regresar</a>}</p>
        </div>
      )
    );
  }
}

export default Profile;

export const getServerSideProps = withPageAuthRequired();
