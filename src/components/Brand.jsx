const Brand = ({ name, image }) => {
  return (
    <div className='brand'>
      <img src={image} alt={name} width="100" />
      <p>{name}</p>
    </div>
  )
}

export default Brand;