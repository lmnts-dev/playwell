import React from 'react'
import ImgMatchContext from './context'
import useImages from './use-images'

const ImgMatchProvider = ({ children }) => {
  const images = useImages()
  return (
    <ImgMatchContext.Provider value={images}>
      {children}
    </ImgMatchContext.Provider>
  )
}

export default ImgMatchProvider