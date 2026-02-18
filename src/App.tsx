import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Layout>
        <Landing />
      </Layout>
    </Router>
  );
}

export default App;
