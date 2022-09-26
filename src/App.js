import logo from "./logo.svg";
import "./App.css";
import ProductPreview from "./components/ProductPreview";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={window.location.pathname || ""}>
        <Route exact path="/productPreviewCard" component={ProductPreview} />
      </BrowserRouter>
    </div>
  );
}

export default App;
