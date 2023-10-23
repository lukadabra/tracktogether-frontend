import { useContext } from "react";
import { ThemeContext } from "../../theme/contexts/ThemeContext";

export default function Navbar () {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <div className="bg-slate-200 dark:bg-slate-800 p-2">
                <div className="flex">
                    <div>
                        <button onClick={toggleTheme}>Changer le theme</button>
                    </div>
                </div>
            </div>
        </>
    )
}