import React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';


export const ArticlePage = () =>{
    const{name}=useParams();
    const article = articleContent.find(article =>article.name === name );
    
    if(!article) return <h1>Article does not exist!</h1>
    
    return (
    <>
    <h1>{article.name}</h1>
    {article.content.map((paragraph,key) => {
        return  <p key ={key}>{paragraph}</p>;
        
    })}
    </>  
    );

    
};

export default ArticlePage;