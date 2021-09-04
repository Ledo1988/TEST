import React from "react";

export interface IState {
    condition?: string,
    postcard?: string,
    greetings?: string,
}

interface IContextProps {
    data: {
        user: {
            name: string,
            email: string
        },
        postcards: string[]
    },
    state: IState,
    setState: (prevState: (prevState: IState) =>  IState ) => void;
}

export default React.createContext({} as IContextProps);