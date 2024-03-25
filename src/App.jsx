import SelecatbleGrid from "./components/SelecatbleGrid"

function App() {


  return (
  <div className="">
    Click and drag to select a subset of grids
    <SelecatbleGrid rows={10} cols={12} />
  </div>
  )
}

export default App


