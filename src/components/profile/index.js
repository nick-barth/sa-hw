import React from "react";

import "./styles.css";

function Profile({ client, isList }) {
  return (
    <>
      <div
        className="Profile__name"
        dangerouslySetInnerHTML={{ __html: client.name }}
      ></div>
      <div className="Profile__title">{client.title}</div>
      <img
        className={`Profile__avatar ${isList && "Profile__avatar--small"}`}
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
