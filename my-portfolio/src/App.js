import React,{Component} from 'react';
import{
  BrowserRouter as Router,
  Routes, Route
}from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

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
              <Route path="/about" element={<AboutPage/>}  />
              <Route path="/article/:name" element={<ArticlePage/>}  />
              <Route path="/articles-list" element={<ArticlesListPage/>}  />
              <Route path="*" element={<NotFoundPage/>}  />
            </Routes>
          </div>
        </div>
        </Router>
      
      
    );

  }
    
}

export default App;
