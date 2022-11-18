import { createContext, useContext } from "react"

export const TabContext = createContext({currentTab: 0, setCurrentTab: () => {}});
export const useTabContext = () => useContext(TabContext);