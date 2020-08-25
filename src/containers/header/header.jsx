import React from "react";
import { useHistory } from "react-router-dom";

import "../../styles/layout.css";
import logout from "../../static/images/logout.png";
import { paths } from "../../routes";

export const Header = ({ title, isAuthenticated }) => {
    const history = useHistory();
    return (
        <div className="header">
            <h4 className="title">{title}</h4>
            {isAuthenticated && (
                <img src={logout} height={24} alt={'logout'} onClick={() => history.push(paths["index"])} />
            )}
        </div>
    )
}