import {BrowserRouter} from 'react-router-dom';
import './App.css';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import AuthorProvider from './Context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthorProvider>
          <MainLeft/>
          <MainRight/>
        </AuthorProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
