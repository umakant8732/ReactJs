import "./App.css";
import Card from "./components/card";

function App() {

 let customCardProps = {
  name : "John",
  age : 24,
 }

//  let customCardArray = [1,2,3];


  return (
    <>
      <h1 className="bg-green-400 text-black p-6 rounded-xl mb-4">
        Tailwind Installed
      </h1>

      <Card cardObj = {customCardProps}/>
    </>
  );
}

export default App;
