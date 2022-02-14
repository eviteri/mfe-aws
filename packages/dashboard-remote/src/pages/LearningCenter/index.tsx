import React, { FC } from 'react'
import Grid from '@mui/material/Grid'

interface YoutubeEmbedProps {
  embedId: string
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId }) => (
  <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
    <iframe
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      }}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

const LearningCenter: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={6}>
        <YoutubeEmbed embedId="s_Fs4AXsTnA" />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <YoutubeEmbed embedId="s_Fs4AXsTnA" />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <YoutubeEmbed embedId="UbEx1v26kCs" />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <YoutubeEmbed embedId="ZFNxTy3fOO0" />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <YoutubeEmbed embedId="1bH3X-M7pT8" />
      </Grid>
    </Grid>
  )
}
export default LearningCenter
