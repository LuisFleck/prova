import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import { situationBooks } from "../../../service/books";
import Button from "../../login/Button";
import "./style.css"

  const Books = ({ data, id }) => {
  
    const [situation, setSituation] = React.useState(data.situation);
    const { updateBook } = React.useContext(UserContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      updateBook(id, situation)
      alert('Atualizado com sucesso')
    }

    return (
      <div style={{padding: '5px', textAlign:'center'}  }>
        <form className="form" onSubmit={handleSubmit} >
          <p>Título: {data.title}</p>
          <p>Autor: {data.author}</p>
          <p>Ano: {data.year}</p>
          <select 
          label="test" 
          name="situation" 
          id="situation" 
          value={situation}
          onChange={({ target }) => setSituation(target.value)}
          >
        <option disabled value="">
          Selecione
        </option>
        { situationBooks.map((situation, index) => {
            return (
                <option key={index} value={situation}>
                    {situation}
                </option>
            )
        })}
        </select>
        <Button >Atualizar</Button>
        </form>
      </div>
    );
  };
  
  export default Books;