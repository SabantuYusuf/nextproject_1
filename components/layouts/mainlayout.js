import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            <title>My awesome App</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap" rel="stylesheet"></link>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.css" integrity="sha512-MxCUiuI+uAXgr9Z9fxH1Y82CnqRrWySWqHejZyUMW55VJqL4trf9FXM/SiT7NQXZd4H0nJOr6FAAJTEjAmrm+A==" crossorigin="anonymous" />
            <link href="/static/css/styles.css" rel="stylesheet"/>
        </Head>
        <div className="mainLayout container">
            <Header/>
            {props.children}
        </div>


    
    </>
)

export default MainLayout;