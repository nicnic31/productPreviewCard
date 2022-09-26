import "./App.css";
import ProductPreview from "./components/ProductPreview";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="https://nicnic31.github.io/productPreviewCard/">
        <Routes>
          <Route path="/productPreviewCard" element={<ProductPreview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
