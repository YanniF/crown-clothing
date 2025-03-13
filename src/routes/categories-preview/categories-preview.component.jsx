import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../context/categories.context.jsx";
import {Link} from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import './categories-preview.styles.scss'

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories)?.map(title => (
        <Fragment key={title}>
          <h2 className="categories-preview-title">
            <Link to={`./${title}`}>{title}</Link>
          </h2>
          <div className="categories-preview-container">
            {categories[title]?.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
}

export default CategoriesPreview;