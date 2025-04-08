import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from "react";

export interface IMainContext {
  openAuth: boolean;
  setOpenAuth: Dispatch<SetStateAction<boolean>>;
}

export const MainContext = createContext<IMainContext>({
  openAuth: false,
  setOpenAuth: () => false
});

export const MainContextProvider:FC<PropsWithChildren<IMainContext>> = ({ children }) => {
  const [openAuth, setOpenAuth] = useState(false);


  return (
    <MainContext.Provider value={{ openAuth, setOpenAuth }}>{children}</MainContext.Provider>
  );
};
