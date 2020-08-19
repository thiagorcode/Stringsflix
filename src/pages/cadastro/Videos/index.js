import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
   const history = useHistory();
   const [categorias, setCategorias] = useState([]);
   const categoryTitles = categorias.map(({ titulo }) => titulo);

   const { handleChange, values } = useForm({
      titulo: 'Video padrão',
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

   function handleSubmit(event) {
      event.preventDefault();
      // alert('Video Cadastrado com sucesso!!!1!');

      const categoriaEscolhida = categorias.find((categoria) => {
         return categoria.titulo === values.categoria;
      });

      videosRepository.create({
         titulo: values.titulo,
         url: values.url,
         categoriaId: categoriaEscolhida.id,
      })
         .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
         });
   }

   return (
      <PageDefault>
         <h1>Cadastro de Video</h1>

         <form onSubmit={handleSubmit} >
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
            <Button style={{ margin: "30px 0" } /**Alterar para stylede */}>
               Cadastrar Categoria
            </Button>
         </Link>
      </PageDefault>
   );
}

export default CadastroVideo;