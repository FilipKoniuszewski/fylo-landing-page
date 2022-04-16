import './App.css';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Layout from "./Layout";

function App() {
  return (
      <Routes>
        <Route path="/fylo-landing-page" element={<Layout/>}>
          <Route index element={< LandingPage />}/>
        </Route>
      </Routes>
  );
}

export default App;
