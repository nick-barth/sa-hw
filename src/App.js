import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Router from "./routes";

export const ClientContext = createContext();

function App() {
  const [clients, setClients] = useState([]);
  const [isLoadingClients, setIsLoadingClients] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/client")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setClients(data);
        setIsLoadingClients(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/">My Client App</a>
      </h1>
      <div className="App__content">
        <ClientContext.Provider value={clients}>
          {!isLoadingClients ? <Router /> : "loading"}
        </ClientContext.Provider>
      </div>
    </div>
  );
}

export default App;
