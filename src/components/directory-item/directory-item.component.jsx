import {useNavigate} from "react-router-dom";
import './directory-item.styles.scss'

const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <div className="directory-item-container" onClick={goToCategory} role="link">
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
