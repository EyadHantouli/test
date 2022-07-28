import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetch from "./Components/Fetch";
import IFrame from "./Components/IFrame";
import LinkBar from "./Components/LinkBar";
import Video from "./Components/Video";

function App() {

  return (
    <BrowserRouter>
      {/* <Fetch /> */}
      {/* <LinkBar /> */}
      <IFrame />
      <Video />
      <Routes>
        {/* <Route exact path='/' element={<LinkBar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
