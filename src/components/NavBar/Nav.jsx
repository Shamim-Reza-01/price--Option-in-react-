import { useState } from "react";
import Link from "../Link/link";
import {AiOutlineAlignLeft,AiOutlineClose } from 'react-icons/ai';


const Nav = () => {
    const[open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Portfolio", path: "/portfolio" },
        { id: 5, name: "Contact", path: "/contact" }
      ];

    return (
        <div >
            <div className="md:hidden text-2xl" onClick={() =>setOpen(!open)}>
            {
                open === true?
                 <AiOutlineClose></AiOutlineClose> :
                 <AiOutlineAlignLeft ></AiOutlineAlignLeft>
            }
            </div>
            <ul className={` md:flex duration-3000 absolute md:static
            ${open ? 'top-17':'-top-60'}
            bg-red-300 px-5`} >
            {
                routes.map(route =><Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Nav;