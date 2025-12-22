
import products from '../../../Data/products.json'
import ProductCard from './ProductCard'
interface producttype{
     id: number;
    name: string;
    model: string;
    price: number;
   images: string[];
    category: string;
}
interface ProductListProps {
  category: string; // ← dışarıdan gelen kategori
}

function ProductList({category}: ProductListProps) {
  const filtered = products.filter(p => p.category === category);
  
    return (
      <div className="max-w-7xl mx-26 flex items-center  ">
    <div className="  grid grid-cols-2 md:grid-cols-4 gap-21 ">
    
    {
        filtered.map((item : producttype) => (
            <ProductCard key={item.id} product={item}/>

        ))}
    </div>
    </div>
  )
}

export default ProductList
