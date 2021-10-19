import React from 'react'
import {Link} from 'react-router-dom'
import style from "../scss/Nav.module.scss"

function Navbar() {
    return (
        <div className={style['navbar']}>
            <ul className={style['list']}>
                <li>
                    <Link to="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/grid">
                        Grid
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
