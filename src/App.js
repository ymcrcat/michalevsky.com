import {BrowserRouter} from 'react-router-dom';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';
import AuthorProvider from './Context';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App min-h-screen mx-auto max-w-5xl px-6 py-10 md:py-12 flex gap-8">
      <BrowserRouter>
        <AuthorProvider>
          <MainLeft/>
          <MainRight/>
        </AuthorProvider>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
