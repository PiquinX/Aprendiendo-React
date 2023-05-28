import { TwiiterFollowingCard } from "./twitterFollowingCard";
import './App.css'

export function App (){
    const formatUsername = username=> `@${username}`; 
    return (
        <>
            <TwiiterFollowingCard 
            formatUsername ={formatUsername} 
            isFollowing 
            userName='midudev' 
            name='Miguel Angel Duran'/>

            <TwiiterFollowingCard 
            formatUsername ={formatUsername} 
            isFollowing={false} 
            userName='pheralb' 
            name='Pablo Hernandez'/>

            <TwiiterFollowingCard 
            formatUsername ={formatUsername} 
            isFollowing 
            userName='elonmusk' 
            name='Elon Musk'/>

            <TwiiterFollowingCard 
            formatUsername ={formatUsername} 
            isFollowing 
            userName='vxnder' 
            name='Vanderhart'/>
        </>  
    )
}