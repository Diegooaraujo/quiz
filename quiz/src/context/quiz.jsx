//iniciando contexto 

import { Children, createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({Children})=>{
    const value = {name:"quiz"};

    return <QuizContext.Provider value={value}>{Children}</QuizContext.Provider>
};