import Button from "./components/Button";
import { useState } from "react";

function App() {
  const arr = [
    {
      name: "Red",
      value: "bg-red-600",
    },
    {
      name: "Purple",
      value: "bg-purple-600",
    },
    {
      name: "Pink",
      value: "bg-pink-600",
    },
    {
      name: "Indigo",
      value: "bg-indigo-800",
    },
    {
      name: "Sky",
      value: "bg-sky-600",
    },
    {
      name: "Teal",
      value: "bg-teal-600",
    },
    {
      name: "Emerald",
      value: "bg-emerald-500",
    },
    {
      name: "Amber",
      value: "bg-amber-500",
    },
  ];

  const [color, setColor] = useState("bg-cyan-950");

  return (
    <>
      <div className={`w-[100wh] h-[100vh] ${color} pt-[180px]`}>
        <h1 className="text-8xl font-sans font-normal bg-gradient-to-r from-slate-200 via-zinc-700  to-black bg-clip-text text-transparent  text-center">
          {" "}
          Background Color
        </h1>
        <div className="mt-[18%] ml-44">
          <Button myArr={arr} changer={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
