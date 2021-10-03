import React from 'react';
import CardCreate from './CardCreate';
import CardList from './CardList';

const App = () => {
    return (
        <div className="container">
            <h1>Create Cards</h1>
            <CardCreate />
            <hr/>
            <h1>Card List</h1>
            <CardList />
        </div>
    )
};

export default App;