import React from 'react';

const Home = ({test,test2}) => {
    return (
        <div>
            <h1>Home Component</h1>
            <h2>{test}</h2>
            <p>This is my city {test2} </p>
        </div>
    );
};

export default Home;