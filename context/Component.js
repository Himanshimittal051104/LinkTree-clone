"use client"
import React, { createContext, useContext, useState } from 'react';

export const ComponentContext = createContext();

export const ComponentProvider = ({ children }) => {
  const [component, setComponent] = useState(-1);
  
  return (
    <ComponentContext.Provider value={{ component, setComponent }}>
      {children}
    </ComponentContext.Provider>
  );
};