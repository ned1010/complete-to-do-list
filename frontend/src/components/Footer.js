import React from "react";


export default function Footer(){

    const year = new Date().getFullYear();


    return (
        <div className="footer">
            <p>&copy; Nidup &#64; {year}</p>

        </div>
    );
}