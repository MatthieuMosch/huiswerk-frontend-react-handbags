// Product control
// - Shows a red label with text "Best seller" or "New collection"
// - Shows the image of the product
// - Shows the name of the product
// - Shows the price of the product

// helper function to convert the price as number to a price as euro
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