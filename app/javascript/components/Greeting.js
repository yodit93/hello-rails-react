import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../store/greetingSlice";


const Greeting = () => {
    const { greeting, isLoading, error } = useSelector((state) => state.greeting)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchGreeting());
    }, [dispatch])
    console.log(greeting);
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {greeting && <div>{greeting}</div>}
            {error && <div>{error}</div>}
        </>
        
    );
};

export default Greeting;