import { HeaderCtx } from "@context/Header";
import { useContext } from "react";

const HeaderPretitle = ({ pretitle }: { pretitle?: string }) => {
    const HeaderContext = useContext( HeaderCtx );
    
    return (
        <p>{ pretitle ? pretitle : HeaderContext?.item?.pretitle }</p>
    )
}

export default HeaderPretitle;
