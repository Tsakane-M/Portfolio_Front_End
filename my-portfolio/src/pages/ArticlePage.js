import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesListComponent from  '../components/ArticlesListComponent';

export const ArticlePage = () =>{
    const{name}=useParams();
    const article = articleContent.find(article =>article.name === name );
    
    if(!article) return <h1>Article does not exist!</h1>
    const otherArticles = articleContent.filter(article => article.name !== name );
    return (
    <>
    <h1>{article.name}</h1>
    {article.content.map((paragraph,key) => {
        return  <p key ={key}>{paragraph}</p>;
        
    })}
    <ArticlesListComponent articles ={otherArticles}/>
    </>  
    );

    
};

export default ArticlePage;