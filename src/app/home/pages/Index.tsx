import { useContext } from "react";
import { ThemeContext } from "../../theme/contexts/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>Changer le theme</button>
      <h1>Home</h1>
    </>
  );
}