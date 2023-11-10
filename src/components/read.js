import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";
function Read(){
        const {name, setName} = useState('Martin'); //creating an array of books
        
        const [data,setDate] = useState([]);

        useEffect( //act as a constructor
            ()=>{
                axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920') //< logic goes inside
                .then(
                    (response)=>{ 
                        setDate(response.data.books) //call back function
                    }
                )
                .catch( //display a msg if a error is caught
                    (error)=>{
                        console.log(error);
                    }
                );
            },[]
        );

    return(
        <div>

        <h2>This is my Read in another component</h2>   {/*adds a header */}
        <Books myBooks={data}></Books>
    </div>
        );
}

export default Read;