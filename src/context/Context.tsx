import { FC, ReactNode, createContext, useState } from 'react';

interface ContextProps {
  isOpenMenuLang: boolean;
  setIsOpenMenuLang: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProviderProps {
  children: ReactNode;
}

const initialContext = {
  isOpenMenuLang: false,
  setIsOpenMenuLang: () => {},
};

export const Context = createContext<ContextProps>(initialContext);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenMenuLang, setIsOpenMenuLang] = useState<boolean>(false);

  return (
    <Context.Provider value={{ isOpenMenuLang, setIsOpenMenuLang }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
