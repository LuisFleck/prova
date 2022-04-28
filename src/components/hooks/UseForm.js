import React from "react";

const validates = {
  email: {
    regex:
    /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,//assegurar o preenchimento correto
    message: "Invalido e-mail",
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value){
      if(!type) return true;

      if(value.length === 0){
        setError("Informe seu e-mail")
        return false;
      }

      if (validates[type] && !validates[type].regex.test(value)){
          setError(validates[type].message);
          return false;
      }

      setError(null)
      return true;

  }

  function onChance({ target }) {
    if(error) validate(target.value)
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChance,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;