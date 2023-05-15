import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";
import { Route, Routes } from "react-router-dom";

// Pages

// <WorkPage />
// <ContactPage />
// <AboutPage />

// Components

// <Footer />
// <Header />
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/work' element={<WorkPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
