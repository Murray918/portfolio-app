import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout.js'
import Home from './components/Home.js'
import Portfolio from './components/Portfolio.js'
import About from './components/About.js'



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/" component={Home} />
    </Switch>
  </BaseLayout>
  </BrowserRouter>
  ,document.getElementById('root')
);


registerServiceWorker();
