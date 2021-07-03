/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

interface MoviesDTO {
  titulo: string;
  cor: string;
  link_extra?: {
    text?: string;
    url?: string;
  };
  id: number;
  videos: {
    categoriaId: number;
    description?: string;
    id: number;
    titulo: string;
    url: string;
  }[]
}

const Home: React.FC = () => {
  const [dataInit, setDataInit] = useState<MoviesDTO[]>([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoryWithMovies) => {
        setDataInit(categoryWithMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault>
      {dataInit.length === 0 && (<div>Loading...</div>)}

      {dataInit.map((category: MoviesDTO, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dataInit[0].videos[0].titulo}
                url={dataInit[0].videos[0].url}
                videoDescription={dataInit[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dataInit[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
};

export default Home;
