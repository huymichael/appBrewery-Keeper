import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Note from '../note/note';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Note/>
            <Footer/>
        </React.Fragment>
    );
};
export default App;