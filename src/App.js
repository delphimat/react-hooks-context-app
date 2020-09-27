import React from 'react';

import { Container } from "semantic-ui-react";

import CounterView from "./views/counter-view";
import ContactsView from "./views/contact-view";

function App() {
  return (
      <Container>
          <h1>React Hooks Context Demo</h1>
          <ContactsView/>
          <CounterView />
      </Container>
  );
}

export default App;
