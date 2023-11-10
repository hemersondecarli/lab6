import BookItem from "./bookItem";

function Books(props){
        
    return props.myBooks.map(       //map function to use in the book array
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    ); 
}

export default Books;