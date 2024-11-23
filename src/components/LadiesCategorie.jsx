import React from 'react'

const LadiesCategorie = (props) => {
  const {title,img1,img2,img3,img4,img5,img6}=props.ladiesFashion
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='collection'>
        <img src={img1} alt={title}></img>
        <img src={img2} alt={title}></img>
        <img src={img3} alt={title}></img>
        <img src={img4} alt={title}></img>
        <img src={img5} alt={title}></img>
        <img src={img6} alt={title}></img>
      </div>
    </div>
  )
}

export default LadiesCategorie