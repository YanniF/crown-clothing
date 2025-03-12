import './category-item.styles.scss'
import {useNavigate} from "react-router-dom";

const CategoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <div className="category-container" onClick={goToCategory} role="link">
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
