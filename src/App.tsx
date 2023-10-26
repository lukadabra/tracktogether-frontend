// assets
import './app.css';

import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Routes";

// contexts
import { ThemeContext } from "./app/theme/contexts/ThemeContext";
import { UserContext } from "./app/auth/contexts/UserContext";

// hooks
import { ThemeProvider } from './app/theme/hooks/UseThemeContext';
import { UserProvider } from "./app/auth/hooks/UseUserContext";

function App() {
  const { theme, toggleTheme } = ThemeProvider();
  const user = UserProvider();

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme: toggleTheme }}>
        <UserContext.Provider value={user}>
          <RouterProvider router={Router} />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;