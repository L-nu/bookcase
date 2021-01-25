import React from 'react' ;
import Book from './Book' ;

const BookList = (props) => {
    return (
        <div>
            <h2>Hi, these are the books:</h2>
            {props.children}
        </div>
    ) ;
} ;

export default BookList ;