import React, { FC } from 'react'
import { VideoGallery, VideoWrapper, Iframe } from './subComponents'

interface YoutubeEmbedProps {
  embedId: string
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId }) => (
  <VideoWrapper>
    <Iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoWrapper>
)

const LearningCenter: FC = () => {
  return (
    <div>
      <VideoGallery>
        <YoutubeEmbed embedId="s_Fs4AXsTnA" />
        <YoutubeEmbed embedId="UbEx1v26kCs" />
        <YoutubeEmbed embedId="ZFNxTy3fOO0" />
        <YoutubeEmbed embedId="1bH3X-M7pT8" />
      </VideoGallery>
    </div>
  )
}
export default LearningCenter
