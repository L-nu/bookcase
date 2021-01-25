import React from 'react';

const Book = (props) => {
  //  let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = props.book;

   const info = props.book.volumeInfo ;
  // const { volumeInfo } = props.book;
 const { volumeInfo : { title,  authors, description, imageLinks : {thumbnail}} } = props.book ;
  
 const renderAmount = ( ) => {
     if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
        return '£' + props.book.saleInfo.listPrice.amount ;
     }
 }

   const renderAuthors = ( ) => {
       if (authors.length === 1 ) {
           return authors ;
       }
       return authors.map(author => author + ', ' ) ;
   }
     return (
            <div>
                <img src={thumbnail} />
                <h2>{title} - {renderAuthors( ) }</h2>
                <p>{renderAmount ( ) }</p>
                <p>{description}</p>
            </div>
    );
}
export default Book;