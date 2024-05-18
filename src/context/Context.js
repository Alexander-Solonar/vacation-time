import { createContext, useState } from 'react';

const initialContext = {
  isOpenMenuLang: false,
  setIsOpenMenuLang: () => {},

  isOpenMobMenu: false,
  setIsOpenMobMenu: () => {},
};

export const Context = createContext(initialContext);

const ContextProvider = ({ children }) => {
  const [isOpenMenuLang, setIsOpenMenuLang] = useState(false);
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);

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
