import { useState } from "react";

export function TwiiterFollowingCard ({children, formatUsername, userName = 'unknown', initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // se le pone initialIsFollowing porque el estado solo se inicializa una vez(la prop tiene true o false en este caso, es decir que es como si pusieramos true o false sin mas).

    // userName = `@${userName}` Esto esta muy mal
    //const arroba = `@${userName}`; esto esta bien

    //propiedades, parametros o props en esta funcion son = {formatUsername,userName,name, isFollowing}).

    // las props tienen que ser inmutables.(no las modifiques).

    // no usar children como prop normal
    const changeState = ()=>{
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} className="tw-followCard-img"/>
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoName">{children}</strong>
                <span className="tw-followCard-infoUserName">{formatUsername(userName)}</span>
            </div>
            </header>

            <aside className="tw-followCard-aside">
                <button className={buttonClassName} onClick={changeState} >
                    <span className="tw-followCard-button-text">{text}</span>
                    <span className="tw-followCard-button-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}