import React from "react"

class Navigation extends React.Component {
    render (){
        return(
            <nav className="Nav">
                <a> REFREEZ </a>
                <ul className="nav-item">
                    <li> Football </li>
                    <li> American Football </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation