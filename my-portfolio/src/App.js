import React,{Component} from 'react';
import{
  BrowserRouter as Router,
  Routes, Route
}from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './NavBar';

import './App.css';



class App extends Component {
  render (){
    return(
      <Router>
        <div id="page-body">
          <NavBar/>
          <div classname="App">
            <Routes>
              <Route exact path="/" element={<HomePage/>}  />
              <Route exact path="/about" element={<AboutPage/>}  />
              <Route exact path="/article" element={<ArticlePage/>}  />
              <Route exact path="/articles-list" element={<ArticlesList/>}  />
            </Routes>
          </div>
        </div>
        </Router>
      
      
    );

  }
    
}

export default App;
