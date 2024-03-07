import { FC, ReactNode, createContext, useState } from 'react';

interface ContextProps {
  isOpenMenuLang: boolean;
  isOpenMobMenu: boolean;
  setIsOpenMenuLang: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenMobMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProviderProps {
  children: ReactNode;
}

const initialContext = {
  isOpenMenuLang: false,
  setIsOpenMenuLang: () => {},

  isOpenMobMenu: false,
  setIsOpenMobMenu: () => {},
};

export const Context = createContext<ContextProps>(initialContext);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenMenuLang, setIsOpenMenuLang] = useState<boolean>(false);
  const [isOpenMobMenu, setIsOpenMobMenu] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        isOpenMenuLang,
        isOpenMobMenu,
        setIsOpenMenuLang,
        setIsOpenMobMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
