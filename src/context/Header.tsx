import { createContext } from 'react';

import { HeaderContextProps, HeaderProps } from '@models/header.inteface';


export const HeaderCtx = createContext<HeaderContextProps | null>(null);


export const Header = ({ children, item }: HeaderProps) => {
    return (
        <HeaderCtx.Provider value={{item}}>
            <div>
                { children }
            </div>
        </HeaderCtx.Provider>
    )
};