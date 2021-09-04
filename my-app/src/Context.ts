import React from "react";

interface IContextProps {
    data: {
        user: {
            name: string,
            email: string
        },
        postcards: string[]
    },
    state: {
        condition: string,
        postcard: string,
        greetings: string
    },
    setState: (prevState: any) => void;
}


export default React.createContext({} as IContextProps);