import { TwiiterFollowingCard } from './twitterFollowingCard'
import './App.css'

export function App() {
    const formatUsername = username => `@${username}`

    const midudev = { formatUsername, initialIsFollowing: true, userName: 'midudev' } // esto no es tan buen practica
    // se le pone initialIsFollowing porque el estado solo se inicializa una vez(la prop tiene true o false en este caso, es decir que es como si pusieramos true o false sin mas).

    return (
        <>
            <TwiiterFollowingCard {...midudev}>
                Miguel Angel Duran
            </TwiiterFollowingCard>

            <TwiiterFollowingCard
                formatUsername={formatUsername} userName='pheralb'>
                Pablo Hernandez
            </TwiiterFollowingCard>

            <TwiiterFollowingCard formatUsername={formatUsername} userName='elonmusk'>
                Elon Musk
            </TwiiterFollowingCard>

            <TwiiterFollowingCard formatUsername={formatUsername} userName='vxnder'>
                Vanderhart
            </TwiiterFollowingCard>
        </>
    )
}
