import React,{Component} from 'react';
import{
  BrowserRouter as Router,
  Routes, Route
}from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlesList from './pages/ArticlesList';


import './App.css';



class App extends Component {
  render (){
    return(
      <Router>
        <div classname="App">
          <Routes>
            <Route exact path="/" element={<HomePage/>}  />
          </Routes>
        </div>
      </Router>
      
    );

  }
    
}

export default App;
