import './App.css'
import Button from "./components/button/Button.jsx";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button title="to the collection"></Button>
          <Button title="shop all bags"></Button>
          <Button title="pre-orders" disabled>pre-orders</Button>
        </nav>
      </>
  )
}

export default App
