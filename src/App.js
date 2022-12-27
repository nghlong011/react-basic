import "./styles/App.scss";
import PreHeader from "./components/Pre_header";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PreHeader />
      </div>
    </BrowserRouter>
  );
}

export default App;
