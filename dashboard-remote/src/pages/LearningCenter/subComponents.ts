import styled from 'styled-components'

export const VideoGallery = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 48%;
  height: 500px;
  margin-bottom: 2%;
`

export const Iframe = styled.iframe`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`
