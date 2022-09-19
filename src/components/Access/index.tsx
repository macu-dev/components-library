import Link from "next/link";
import { AccessProps } from "@models/access.inteface";
import { AccessContainer } from "./styled";


const Access= ({ children, url, className='', title }: AccessProps) => {
    return (
        <>
            <Link href={url}>
                <AccessContainer className={className}>
                    {title}
                    {children}
                </AccessContainer>
            </Link>
        </>
    )
}

export default Access;