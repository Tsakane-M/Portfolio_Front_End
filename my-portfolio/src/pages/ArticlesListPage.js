import React from 'react';
import articleContent from './article-content';

import ArticlesListComponent from '../components/ArticlesListComponent';

export const ArticlesListPage = () =>{
    return(
        <>
        <h1>Articles</h1>
            <ArticlesListComponent articles = {articleContent}/>
        </>
    );
            };

export default ArticlesListPage;