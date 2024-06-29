'use client';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export const Header = () => {
    const pathname = usePathname();
    const hideReturnLink = pathname === "/";

    return (
        <header className="bg-blue-600 text-white">
            <div className="flex flex-row items-center px-4 justify-center py-1">
                <Link href="/" className="text-white absolute left-4" hidden={hideReturnLink}>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" width="20px" height="20px" />
                </Link>
                <h1 className="text-4xl font-bold">Learn Braille</h1>
            </div>
        </header>
    )


}