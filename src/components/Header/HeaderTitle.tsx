import { HeaderCtx } from "@context/Header";
import { useContext } from "react";

const HeaderTitle = ({ title }: { title?: string }) => {
    const HeaderContext = useContext( HeaderCtx );

    return (
        <h2>{ title ? title : HeaderContext?.item?.title }</h2>
    )
}

export default HeaderTitle;
