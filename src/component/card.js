import React from "react";

const Card = ({id, name, email}) =>{
    return(
        <div className="bg-light-green dib br2 ma2 pa3 grow tc">
            <img src={`https://robohash.org/${id}?size=150x150`} alt="robot_photo" />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;