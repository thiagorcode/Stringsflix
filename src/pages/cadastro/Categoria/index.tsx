import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
// JSON - Server
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  // Fazer manipulação do histórico de navegação
  const history = useHistory();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://stringsflix.herokuapp.com/categorias';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  function handleSubmit(infosDoEvento) {
    const { nome, cor, descricao } = values;
    infosDoEvento.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    // ! Cria no Server uma nova categória
    categoriasRepository.create({
      titulo: nome,
      cor,
      link_extra: {
        text: descricao,
      },

    }).then(() => {
      console.log('Cadastrou com sucesso!');
      history.push('/');
    })
      .catch(() => {
      });
    clearForm();
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        <Button>
          Ir para home
        </Button>
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
