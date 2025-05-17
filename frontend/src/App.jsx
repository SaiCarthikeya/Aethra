import Header from "./components/Header"
import InputText from "./components/InputText"
import Output from "./components/Output"
function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <InputText />
        <Output />
      </div>
    </>
  )
}

export default App
