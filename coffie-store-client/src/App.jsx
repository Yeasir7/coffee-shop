import { useLoaderData } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-6xl text-purple-300 text-center mb-10">
        COFFEE ADDA :{coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <Card key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
