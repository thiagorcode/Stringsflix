/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react';

interface categoryDto {
  nome: string;
  descricao: string;
  cor: string;
}

function useForm(valueInit: categoryDto) {
  const [values, setValues] = useState(valueInit);

  function setValue(chave: any, valor: any) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento: any) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valueInit);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
