import Link from "next/link";
import { AccessProps } from "@models/access.inteface";


const Access= ({ children, url, className='', title }: AccessProps) => {
    return (
        <>
            <Link href={url}>
                <a className={className}>
                    {title}
                    {children}
                </a>
            </Link>
        </>
    )
}

export default Access;