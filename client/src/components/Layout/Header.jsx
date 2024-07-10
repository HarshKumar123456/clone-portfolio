import React, { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const handleHamburgerClick = () => {
        setSideBarVisible(true);
    }

    const handleCrossClick = () => {
        setSideBarVisible(false);
    }


    return (
        <>
            <header>

                {sideBarVisible ?
                    <>
                        {/* SideBar Starts here */}
                        <nav className="h-fit bg-white flex flex-col p-4 pb-64 border border-e-2">
                            {/* Logo and Links container Starts here  */}
                            <div className="logo-container p-4 flex flex-col gap-x-4">
                                <div className="flex justify-between items-center">
                                    <Link to={"/"} className="cursor-pointer text-4xl text-gray-400 tracking-tighter">
                                        Harsh Kumar
                                    </Link>
                                    <h2 className="text-2xl cursor-pointer" onClick={handleCrossClick}>
                                        X
                                    </h2>
                                </div>

                                {/* Links container for Mobile (Small screen size devices) Starts here  */}
                                <ul className="button-container flex flex-wrap mt-4 pt-4 gap-x-4 gap-y-4 justify-end">
                                    <li>Who am I ?</li>
                                    <li>Education</li>
                                    <li>Skills</li>
                                    <li>Projects</li>
                                    <li>Publications</li>
                                </ul>
                                {/* Links container for Mobile (Small screen size devices) Ends here  */}


                            </div>
                            {/* Logo and Links container Ends here  */}


                        </nav>
                        {/* SideBar Ends here */}
                    </>

                    :
                    <>
                        <nav className="flex justify-between items-center p-4 border-b-2">
                            {/* Logo and Links container Starts here  */}
                            <div className="logo-container flex items-center gap-x-4">
                                <Link to={"/"} className="cursor-pointer text-4xl text-gray-400 tracking-tighter">
                                    Harsh Kumar
                                </Link>

                            </div>
                            {/* Logo and Links container Ends here  */}

                            {/* Links container for Tablet (Middle screen size devices) Starts here  */}
                            <ul className="button-container hidden md:flex gap-x-5">
                                <li>Who am I ?</li>
                                <li>Education</li>
                                <li>Skills</li>
                                <li>Projects</li>
                                <li>Publications</li>
                            </ul>
                            {/* Links container for Tablet (Middle screen size devices) Ends here  */}

                            {/* Hamburger Menu for Mobiles (Smaller screen size devices) Starts here */}
                            <div className="hamburger-container cursor-pointer md:hidden" onClick={handleHamburgerClick}>
                                <svg
                                    className="block h-4 w-4 fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </div>
                            {/* Hamburger Menu for Mobiles (Smaller screen size devices) Ends here */}
                        </nav>
                    </>}



            </header>
        </>
    );
};

export default Header;