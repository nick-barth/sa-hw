import React from "react";

import "./styles.css";

function Profile({ client, isList }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: client.name }}></div>
      <div>{client.title}</div>
      <img
        className={`profile ${isList && "Profile__avatar--small"}`}
        src={client.avatar}
        alt={client.name}
      />
      {!isList && (
        <div dangerouslySetInnerHTML={{ __html: client.quote }}></div>
      )}
    </>
  );
}

export default Profile;
