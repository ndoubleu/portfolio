import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Full-stack Developer</button>
                    <h1 className="white">Focus on being the best you can</h1>
                    <h1 className="white">at what you want to do.</h1>
                    <p className="gray">“Simplicity is the soul of efficiency.” – Austin Freeman</p>
                    <a className="green" href="mailto:ndoubleu25@gmail.com">Let&#39;s chat!</a>
                </div>
                <Image src="/images/blaiti.png" width={463} height={513} alt="blaiti"  /> 
            </div>
        </header>
    )
}