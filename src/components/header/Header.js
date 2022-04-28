import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import { UserContext } from "../../contexts/UserContext";

const Header = () => {

    const { data, deslogarUser } = React.useContext(UserContext);

    const validateRoute  = (data) => {
        if(!data)
            return <Link className="navigation" to="/login" > login </Link>            

        if(data)
            return <Link className="navigation" to="/login" onClick={deslogarUser}> logout </Link>
    }

  return (
    <header>
      <nav className="container">
        <Link to="/login">
          <h1 className="logo">Biblioteca Feliz</h1>
        </Link>
        <nav>
        {validateRoute(data)}
        </nav>
      </nav>
    </header>
  );
}

export default Header;