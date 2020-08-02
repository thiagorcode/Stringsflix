import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function Videos() {
   return (
      <>
         <PageDefault>
            <h1>Cadastro dos vídeos</h1>
            <Link to="/cadastro/categoria">
               Cadastrar Categória
            </Link>
         </PageDefault>
      </>
   )
}
export default Videos