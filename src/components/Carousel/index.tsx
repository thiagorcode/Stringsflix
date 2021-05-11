import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

interface CarouselDTO {
  ignoreFirstVideo?: boolean;
  category: {
    titulo: string;
    id: number;
    cor: string;
    link_extra?: {
      url?: string;
      text?: string;
    }
    videos: {
      categoriaId: number;
      description?: string;
      id: number;
      titulo: string;
      url: string
    }[]
  };
}

const VideoCardGroup: React.FC<CarouselDTO> = ({
  ignoreFirstVideo,
  category,
}) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
              <ExtraLink href={categoryExtraLink.url} target="_blank">
                {categoryExtraLink.text}
              </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((movie, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={movie.titulo}>
              <VideoCard
                videoTitle={movie.titulo}
                videoURL={movie.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default VideoCardGroup;
