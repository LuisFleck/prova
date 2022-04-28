import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import { situationBooks } from "../../../service/books";
import useForm from "../../hooks/UseForm";
import Button from "../../login/Button";
import Input from "../../login/Input";
import Book from "../books/Book";
import "./admin.css";

const Admin = () => {
  const title = useForm();
  const author = useForm();
  const year = useForm();
  const [situation, setSituation] = React.useState("");
  const { addBooks } = React.useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title,
      author,
      year,
      situation
    }
    if (
      title.validate() &&
      author.validate() &&
      year.validate()
    ) {
     addBooks(data);
    }
  };

  return (
    <div className="container">
    <section className="container">
      <form className="forms" onSubmit={handleSubmit}>
        <Input label="Titulo:" type="text" name="title" {...title} />
        <Input label="Autor:" type="text" name="author" {...author} />
        <Input label="Ano de publicação:" type="text" name="year" {...year} />
        <label>Situação:</label>
        <select 
          label="test" 
          name="situation" 
          id="situation" 
          value={situation}
          onChange={({ target }) => setSituation(target.value)}
          >
        <option disabled value="">
          Status
        </option>
        { situationBooks.map((situation, index) => {
            return (
                <option key={index} value={situation}>
                    {situation}
                </option>
            )
        })}
        </select>
        <Button>Cadastrar</Button>
      </form>
    </section>
    <section>
      <Book/>
    </section>
    </div>
  );
};

export default Admin;
