import React, { useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

interface CategoriaDTO {
  id: number;
  titulo: string;
  cor: string
  link_extra?: {
    text: string;
  }
}

const CadastroVideo: React.FC = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState<CategoriaDTO[]>([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: 'Digite o título do vídeo',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleSubmit = useCallback(() => {
    const categoriaEscolhida = categorias
      .find((categoria) => categoria.titulo === values.categoria);

    if (!categoriaEscolhida) {
      throw new Error('');
    }

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        console.log('Cadastrou com sucesso!');
        history.push('/');
      });
  }, [values.titulo, values.url, values.categoria, categorias, history]);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        <Button style={{ margin: '30px 0' } /** Alterar para stylede */}>
          Cadastrar Categoria
        </Button>
      </Link>
    </PageDefault>
  );
};

export default CadastroVideo;
