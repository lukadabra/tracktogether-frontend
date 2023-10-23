// assets
import './app.css';

import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";


function App() {

  return (
    <>
      <RouterProvider router={Routes} />
    </>
  );
}

export default App;