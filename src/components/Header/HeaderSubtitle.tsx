import { HeaderCtx } from "@context/Header";
import { useContext } from "react";

const HeaderSubtitle = ({ subtitle }: { subtitle?: string }) => {
    const HeaderContext = useContext( HeaderCtx );
    
    return (
        <h3>{ subtitle ? subtitle : HeaderContext?.item?.subtitle }</h3>
    )
}

export default HeaderSubtitle;
