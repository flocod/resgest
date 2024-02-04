import './App.scss';
import Routes from "./routes"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes></Routes>
  </BrowserRouter>
  );
}

export default App;
