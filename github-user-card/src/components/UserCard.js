import React from "react";

const UserCard = props => {
    return (
        <div>
            <h1>GitHub User</h1>
            <div className="userCard">
                <img width="130" src={props.user.avatar_url} />
                <p>NAME: {props.user.name}</p>
                <p>LOGIN: {props.user.login}</p>
                <p>
                    PROFILE: <a href={props.user.html_url} target="_blank">{props.user.html_url}
                    </a>
                </p>
            </div>
        </div>
    )
}

export default UserCard;