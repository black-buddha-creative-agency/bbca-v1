import React from "react";
import { Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import ArtistsPage from "./pages/ArtistsPage";

const client = new ApolloClient({
  uri: "https://api.blackbuddhacreativeagency.com/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/event/:slug" component={EventDetailPage} />
          <Route path="/artists" component={ArtistsPage} />
        </Layout>
      </Switch>
    </ApolloProvider>
  );
};

export default App;
