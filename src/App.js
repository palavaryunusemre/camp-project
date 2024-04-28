import { Container } from 'semantic-ui-react';
import './App.css';
import Navi from './layouts/Navi'
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;
