import ReactDOM from 'react-dom/client';
import { CarritoContext } from './context/CarritoContext.jsx';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<CarritoContext> 
<App />
</CarritoContext>
</BrowserRouter>
)