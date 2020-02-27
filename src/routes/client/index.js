import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClientContext } from "../../App";
import Profile from "../../components/profile";

function Client() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [error, setError] = useState(null);
  const clients = useContext(ClientContext);

  useEffect(() => {
    const client = clients.find(c => c.id === id);
    client ? setClient(client) : setError("Client Not Found");
  }, [clients, id]);

  return (
    <>
      <h2>Individual Client</h2>
      {client && !error ? (
        <Profile client={client} />
      ) : error ? (
        error
      ) : (
        "loading"
      )}
    </>
  );
}

export default Client;
