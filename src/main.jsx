
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { App } from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
// import 'modern-normalize'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
