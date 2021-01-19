import React, { useState, useContext, createContext } from "react";

const MenuContext = createContext(null);

const useMenuContext = () => useContext(MenuContext);

function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuProvider, useMenuContext };
