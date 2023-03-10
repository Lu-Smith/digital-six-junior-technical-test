import { Link } from "react-router-dom";
import classes from "./viewProductButton.sass";

export default function ViewProductButton({ productPermaLink }) {
  const permaLink = productPermaLink;

  return (
    <div>
      <Link to={`/product/${permaLink}`}>View Product</Link>
    </div>
  );
}
