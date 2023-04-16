const Item = ({category, pictureURL, title, stock}) => {
  return (
    <div>
      <p>{category}</p>
      <img src={pictureURL} alt="Book picture" />
      <p>{title}</p>
      <p>{stock}</p>
    </div>
  )
}

export default Item;