import React from "react";
import {  useNavigate } from 'react-router-dom';
import { addBook, updateBooks } from "../service/books";
import { validateUser } from "../service/validateUser";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [books, setBooks] = React.useState(null);
  
    const navigate = useNavigate();

    const validateLogin = (userData) => {

        const { user, error } = validateUser({email: userData.userEmail.value, password: userData.userPasswd.value });

        if(error) {
            setError(error);
            navigate('/login')
            return null
            
        }
        setData(user)

        if(user.category === 'bibliotecario')
            navigate('login/adm')
    
        if(user.category === 'leitor')
            navigate('login/user')
    }

    const addBooks = (data) => {
        const books = addBook(data)
        setBooks(books)
        return books;
    }

    const updateBook = (id, situation) => {
        const books = updateBooks(id, situation)
        setBooks(books)
    }

    const deslogarUser = () => {
        setData(null)
        navigate('/login')
    }
     
    return <UserContext.Provider value={{ validateLogin, addBooks, deslogarUser, updateBook, data, books, error }}>{children}</UserContext.Provider>;
};