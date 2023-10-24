// src/ThemeContext.tsx
import { createContext} from 'react';

import { ThemeContextProps } from "../types/index";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'dark',
    toggleTheme: undefined
});