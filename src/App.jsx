import './App.css'
import Button from "./components/button/Button.jsx";
import Product from "./components/product/Product.jsx";

import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button title="to the collection"/>
                <Button title="shop all bags"/>
                <Button title="pre-orders" disabled/>
            </nav>
            <main>
                <Product labelText="Best seller" src={bag1} name="The handy bag" price="340"/>
                <Product labelText="Best seller" src={bag2} name="The stylish bag" price="250"/>
                <Product labelText="New collection" src={bag3} name="The simple bag" price="300"/>
                <Product labelText="New collection" src={bag4} name="The trendy bag" price="150"/>
            </main>
        </>
    )
}

export default App
