import React from 'react'


const Mencategories = (props) => {
  const {title,img1,img2,img3,img4,img5,img6}=props.menFashion
 
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div className='collection'>
        <img src={img1} alt={title} />
        <img src={img2} alt={title} />
        <img src={img3} alt={title} />
        <img src={img4} alt={title} />
        <img src={img5} alt={title} />
        <img src={img6} alt={title} />
      </div>
    </div>
  )
}

export default Mencategories