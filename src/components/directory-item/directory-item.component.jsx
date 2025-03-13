import {useNavigate} from "react-router-dom";
import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx'

const DirectoryItem = ({ title, imageUrl }) => {
  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`/shop/${title}`)
  }

  return (
    <DirectoryItemContainer onClick={goToCategory}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
