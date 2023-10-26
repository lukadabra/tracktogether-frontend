// src/ThemeContext.tsx
import { createContext} from 'react';

import { User } from "../types/index";

export const UserContext = createContext({} as User | undefined);