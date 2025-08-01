import { Card, Button } from "antd";
import BuyProduct from "./BuyProduct";

const { Meta } = Card;

function ProductCard({ product }) {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={product.image} />}
      >
        <Meta title={product.name} description={product.price} />
      </Card>
      <BuyProduct />
    </div>
  );
}
export default ProductCard;
