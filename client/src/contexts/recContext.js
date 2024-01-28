import { createContext, useContext, useState } from "react";

export const RecContext = createContext();

export const RecProvider = ({ DesktopsFunc }) => {
  const [budget, setBudget] = useState("");

  return (
    <RecContext.Provider value={{ budget, setBudget }}>
      <DesktopsFunc></DesktopsFunc>
    </RecContext.Provider>
  );
};
export const useBudget = () => useContext(RecContext);
