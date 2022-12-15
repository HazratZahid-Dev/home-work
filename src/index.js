import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import About from '../src/About'
// import Contact from '../src/Contact'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App /> 
    {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={App}/>
            <Route path='/about' element={About}/>
            <Route path='/contact' element={Contact}/>
                 
            
        </Routes>
    </BrowserRouter> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
