import React from 'react';
import ReactDOM from 'react-dom/client';
import Fruits from './Fruits';
import Fru from './Fruits/hey';
import './index.css';
// import Rov from './utilis/data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Fruits/>
   {/* <Fru/> */}
   {/* <Rov/> */}
  </React.StrictMode>
)