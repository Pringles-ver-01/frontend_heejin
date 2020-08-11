import React from 'react';
import './App.css';
import './_css/list.css'
import './_css/detail.css'


import './_css/badges.css'
import './_css/tailwind.css'
import './_css/buttons.css'
import NewsList from "./pages/newsList";
import NewsDetail from "./pages/newsDetail";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/list' component={NewsList}/>
      <Route path='/detail' component={NewsDetail}/>
    </BrowserRouter>
  )
}

export default App;
