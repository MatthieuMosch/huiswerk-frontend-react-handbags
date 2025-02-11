// Product control
// - shows a red label with text "Best seller" or "New collection"
// - shows the image of the product
// - shows the name of the product
// - shows the price of the product

import makeEuro from "../../helpers/makeEuro.js";

function Product({labelText, src, name, price}) {
    return (
        <article>
            <span>{labelText}</span>
            <img src={src} alt={src}/>
            <p>{name}</p>
            <h4>{makeEuro(price)}</h4>
        </article>
    );
}

export default Product;