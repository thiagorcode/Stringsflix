import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

interface linkYtDTO {
  youtubeID: string;
}

const YouTubeIframeResponsive: React.FC<linkYtDTO> = ({ youtubeID }) => (
  <VideoContainer>
    <ResponsiveIframe
      title="Titulo do Iframe"
      src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VideoContainer>
);

export default YouTubeIframeResponsive;
