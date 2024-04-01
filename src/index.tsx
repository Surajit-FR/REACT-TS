import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Store } from './services/store/Store';
import Index from './pages/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  </Provider>
);

reportWebVitals();

