import React from 'react';
import { useParams } from 'react-router-dom';

export const ArticlePage = () =>{
    const{name}=useParams();
    return (
    <>
    <h1>This is an {name} article</h1>
    <p>
    article page paragraph
    </p>
    </>)
};

export default ArticlePage;