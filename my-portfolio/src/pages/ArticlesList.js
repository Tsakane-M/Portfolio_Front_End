import React from 'react';
import articleContent from './article-content';
import {Link} from 'react-router-dom';

export const ArticlesList = () =>{
    return(
        <>
        <h1>Articles</h1>
        {articleContent.map((article,key) =>{
            return(
                
                <Link key={key} to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                </Link>
        )}
        )}
        </>
    );
            };

export default ArticlesList;