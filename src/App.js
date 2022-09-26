import logo from "./logo.svg";
import "./App.css";
import ProductPreview from "./components/ProductPreview";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
          <Route exact path="/productPreviewCard" element={<ProductPreview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
