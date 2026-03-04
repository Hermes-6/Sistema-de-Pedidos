import Card from "../components/Card/Card";
import products from "../data/products";

export default function Menu() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {products.map(product => (
        <Card key={product.id} {...product} />
      ))}
    </div>
    
  );
}