import './App.css'

// custom components
import Button from "./components/button/Button.jsx";
import Product from "./components/product/Product.jsx";
import Tile from "./components/tile/Tile.jsx";
// import TileTxtSelect from "./components/TileTxtSelect/TileTxtSelect.jsx";

// bag images
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";

// tile images
import brand from "./assets/brand.png";
import designers from "./assets/our_story.png";

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
            <footer>
                <Tile title="the brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi ea error et
                        eveniet exercitationem iusto, nesciunt officiis perferendis placeat provident quasi quibusdam
                        quo, repellat, sed suscipit vitae voluptatum!
                    </p>
                    <p>Accusantium, aliquam aspernatur, assumenda at autem blanditiis ducimus harum libero minus nobis
                        non nulla quae quidem repellendus soluta ullam vel voluptatibus. Delectus est excepturi
                        laboriosam, repellat suscipit veritatis voluptatibus. Tempore.
                    </p>
                </Tile>
                <Tile src={brand} title="Brand" />
                <Tile src={designers} title="Designer" />
                <Tile title="our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut, deleniti dolores eius
                        eveniet excepturi, explicabo ipsa itaque necessitatibus optio porro qui quisquam repellendus
                        similique sint tenetur ut voluptatem voluptates.
                    </p>
                </Tile>
            </footer>
        </>
    );
}

export default App
