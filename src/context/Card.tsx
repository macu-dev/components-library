import { createContext } from 'react';

import { CardContextProps, CardProps } from '@models/card.interface';
import { CardContainer } from '@components/Card/styled';


export const CardCtx = createContext<CardContextProps | null>(null);


export const Card = ({ children, item }: CardProps) => {
    return (
        <CardCtx.Provider value={{item}}>
            <CardContainer>
                { children }
            </CardContainer>
        </CardCtx.Provider>
    )
};