import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';

export default class App extends Component {
  ApiKey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News Apikey={this.ApiKey} key="general" pageSize={20} country="in" category="general"/>}/>
        <Route exact path="/index.html" element={<News Apikey={this.ApiKey} key="index" pageSize={20} country="in" category="general"/>}/>
        <Route exact path="/business" element={<News Apikey={this.ApiKey} key="business" pageSize={20} country="in" category="business"/>}/>
        <Route exact path="/entertainment" element={<News Apikey={this.ApiKey} key="entertainment" pageSize={20} country="in" category="entertainment"/>}/>
        <Route exact path="/general" element={<News Apikey={this.ApiKey} key="general" pageSize={20} country="in" category="general"/>}/>
        <Route exact path="/health" element={<News Apikey={this.ApiKey} key="health" pageSize={20} country="in" category="health"/>}/>
        <Route exact path="/science" element={<News Apikey={this.ApiKey} key="science" pageSize={20} country="in" category="science"/>}/>
        <Route exact path="/sports" element={<News Apikey={this.ApiKey} key="sports" pageSize={20} country="in" category="sports"/>}/>
        <Route exact path="/technology" element={<News Apikey={this.ApiKey} key="technology" pageSize={20} country="in" category="technology"/>}/>
        
          
        </Routes>
        
      </Router>
    )
  }
}

