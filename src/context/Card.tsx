import { createContext } from 'react';

import { CardContextProps, CardProps } from '@models/card.interface';


export const CardCtx = createContext<CardContextProps | null>(null);


export const Card = ({ children, item }: CardProps) => {
    return (
        <CardCtx.Provider value={{item}}>
            <div>
                { children }
            </div>
        </CardCtx.Provider>
    )
};