import { createContext, useState } from "react";

interface CursorContextValue {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
}

export const CursorContext = createContext<CursorContextValue>({
  cursorType: "",
  cursorChangeHandler: () => {},
});

const CursorContextProvider = ({
  children,
} : any) => {
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (newCursorType: string) => {
    setCursorType(newCursorType);
  };

  return (
    <CursorContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
