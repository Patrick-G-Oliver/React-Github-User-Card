import React from "react";

const FollowerCards = props => {
    return (
        <div>
            <h2>Followers</h2>
            {props.followers.map(follower => (
                <div className="followersCards">
                    <img width="130" src={follower.avatar_url} />
                    <p>LOGIN: {follower.login}</p>
                    <p>
                        PROFILE: <a href={follower.html_url} target="_blank">{follower.html_url}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FollowerCards;