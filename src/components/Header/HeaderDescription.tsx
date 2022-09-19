import { HeaderCtx } from "@context/Header";
import { useContext } from "react";

const HeaderDescription = ({ description }: { description?: string }) => {
    const HeaderContext = useContext( HeaderCtx );
    
    return (
        <p>{ description ? description : HeaderContext?.item?.description }</p>
    )
}

export default HeaderDescription;
