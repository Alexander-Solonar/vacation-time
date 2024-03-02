import { FC, ReactNode, createContext, useState } from 'react';

interface ContextProps {
  isOpenMenuLang: boolean;
  isOpenBurgerMenu: boolean;
  setIsOpenMenuLang: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProviderProps {
  children: ReactNode;
}

const initialContext = {
  isOpenMenuLang: false,
  setIsOpenMenuLang: () => {},

  isOpenBurgerMenu: false,
  setIsOpenBurgerMenu: () => {},
};

export const Context = createContext<ContextProps>(initialContext);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenMenuLang, setIsOpenMenuLang] = useState<boolean>(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        isOpenMenuLang,
        isOpenBurgerMenu,
        setIsOpenMenuLang,
        setIsOpenBurgerMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
