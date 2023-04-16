import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Route, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';
import App from './App';
// import Users from './components/Users'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Router>  
  //   <div>  
  //     <h1>React Router Example</h1>
  //     <Route exact path="/" component={App} />  
  //     <Route path="/userdata" component={Users} />  
  //     {/* <Route path="/contact" component={Contact} />  */}
  //   </div>  
  // </Router>  
);

