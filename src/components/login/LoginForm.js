import React from "react";
import useForm from "../hooks/UseForm";
import { UserContext } from "../../contexts/UserContext";
import Input from "./Input";
import Button from "./Button";
import Error from "../helper/Error";

import './login.css';

const LoginForm = () => {
  const userEmail = useForm("email");
  const userPasswd = useForm();

  const { validateLogin, error } = React.useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userEmail.validate() && userPasswd.validate()) {
        validateLogin({userEmail, userPasswd});
    }
  };

  return (
    <section className="container">
      <form className="forms" onSubmit={handleSubmit}>
        <Input label="E-mail" type="email" name="useremail" {...userEmail} />
        <Input label="Senha" type="password" name="password" {...userPasswd} />
        {error && <Error error={error} />}
        <Button>Login</Button>
      </form>
    </section>
  );
};

export default LoginForm;