import Balances from "./components/Balances";
function App() {
  return (
    <div className="App">
      <Balances company="DBS" cash="123" credit="456" />
    </div>
  );
}

export default App;
