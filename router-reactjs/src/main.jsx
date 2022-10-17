import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Root } from './pages/Root';
import { About } from './pages/About';
import { Router } from './components/Router';
import { Route } from './components/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Router>
      <Route path='/' component={<Root />} />
      <Route path='/about' component={<About />} />
   </Router>
)
