import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import Books from "./Books";
import "./style.css"

const Book = () => {
  const { books } = React.useContext(UserContext)

    return (
    <div>
        {books && books.map(b => { 
          return(
            <div key={b.id} className="book">
            <Books data={b} id={b.id}/>
            </div>
          )
        })}
      </div>
    );
  };
  
  export default Book;