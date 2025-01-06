import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import NoPage from './routes/NoPage.jsx'

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/react-testing/" element={<Home />} />
          <Route path="/react-testing/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
