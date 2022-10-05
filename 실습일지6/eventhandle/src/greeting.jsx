import React from "react";
import GuestGreeting from "./guestGreeting";
import UserGreeting from "./userGreeting";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn) {
        return(
            <UserGreeting />
        );
    }
    else {
        return(
            <GuestGreeting />
        );
    }
}

export default Greeting;