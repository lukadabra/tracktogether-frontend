// assets
import './app.css';

import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Routes";

// contexts
import { ThemeContext } from "./app/theme/contexts/ThemeContext";

// hooks
import { ThemeProvider } from './app/theme/hooks/UseThemeContext';


function App() {
  const { theme, toggleTheme } = ThemeProvider();

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme: toggleTheme }}>
        <RouterProvider router={Router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;