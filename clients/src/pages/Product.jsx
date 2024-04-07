
import { useAuth } from '../ContextApi/TokenApi';
import ProductCard from './ProductCard';

const Product = () => {
  const { products } = useAuth();

  return (
    <>
      <div className="Cards">
        <div className="container-fluid mb-5">
          <div className="grid-container">
            {products.map((val, index) => (
              <ProductCard
                key={index}
                imgSrc={val.imgSrc}
                title={val.title}
                price={val.price}
                productId={val.id} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
