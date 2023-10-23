// assets
import './app.css';

import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";

// contexts
import { ThemeContext } from "./app/theme/contexts/ThemeContext";

// hooks
import { ThemeProvider } from './app/theme/hooks/UseThemeContext';


function App() {
  const { theme, toggleTheme } = ThemeProvider();

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme: toggleTheme }}>
        <div className='bg-slate-900'>
          <RouterProvider router={Routes} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;