import React from "react";

const FollowerCards = props => {
    return (
        <div>
            <h2>Followers</h2>
            <div className="followersCardsWrapper">
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
        </div>
    )
}

export default FollowerCards;