import React from "react";

//here we are creating a async function to call an api

export const GetPosts = async () => {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    return apiResponse;
}

//here we are creating async function to call random user api

export const GetRandomUser = async () => {
    const apiResponse = await fetch('https://randomuser.me/api/');
    return apiResponse;
}
