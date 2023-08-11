import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import MenuHeader from './components/MenuHeader';
import MenuFooter from './components/MenuFooter';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuHeader />
        <MenuFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
