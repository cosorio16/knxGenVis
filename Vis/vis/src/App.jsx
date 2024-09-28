import { useEffect, useState } from "react";
import Aside from "./components/Aside";
import { useStore } from "./zustand/state.js";

function App() {
  const userTheme = localStorage.getItem("theme");

  if (!userTheme) {
    localStorage.setItem("theme", "light");
  }

  const { theme } = useStore();


  return (
    <div
      className={
        theme
          ? "absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
          : "absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
      }
    >
      {theme && (
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      )}
      <Aside></Aside>
    </div>
  );
}

export default App;
