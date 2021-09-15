import React from 'react'
import "./navbar.css"
function Navbar() {
    return (
        <div className="nav" >
            <span data-aos="fade-down">Countries in Asia</span>
            <button onClick={() => window.location.reload()

            }>REFRESH</button>
        </div >
    )
}

export default Navbar
