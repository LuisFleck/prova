import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import Book from "../books/Book";


const User = () => {
    
  const { books } = React.useContext(UserContext);
  
    return (
        <section>
            {books && <Book books={books}/>}
        </section>
    )
}

export default User;