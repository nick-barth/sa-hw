import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// Routes
import ClientList from "./clientList";
import Client from "./client";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ClientList />
        </Route>
        <Route exact path="/client/:id">
          <Client />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
