export function TwiiterFollowingCard ({formatUsername,userName,name, isFollowing}){
    // userName = `@${userName}` Esto esta muy mal
    //const arroba = `@${userName}`; esto esta bien

    //propiedades, parametros o props en esta funcion son = {formatUsername,userName,name, isFollowing}).

    // las props tienen que ser inmutables.(no las modifiques).

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={`https://unavatar.io/${userName}`} className="tw-followCard-img"/>
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoName">{name}</strong>
                <span className="tw-followCard-infoUserName">{formatUsername(userName)}</span>
            </div>
            </header>

            <aside className="tw-followCard-aside">
                <button className="tw-followCard-buttonSeguir">Seguir</button>
            </aside>
        </article>
    )
}