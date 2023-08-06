import { Link } from "react-router-dom";

// Zustland store
import useProducts from "../zustland/products";

function Products() {
  const pdts = useProducts((state) => state.products);
  return (
    <ul>
      {pdts.map((p) => (
        <Link to={"/store/dp/" + p.id} key={p.id}>
          <li style={{ padding: "8px" }}>{p.title}</li>
        </Link>
      ))}
    </ul>
  );
}

export default Products;
