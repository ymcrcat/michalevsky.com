import {BrowserRouter} from 'react-router-dom';
import './App.css';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';

const authorName = 'Yan Michalevsky';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <MainLeft authorName = {authorName} />
          <MainRight authorName = {authorName} />
      </BrowserRouter>
    </div>
  );
}

export default App;
