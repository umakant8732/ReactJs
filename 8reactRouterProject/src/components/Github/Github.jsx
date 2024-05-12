import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    // This useEffect function will fetch data when this component is mounted.
    // const [githubInfo, setGithubInfo] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/uma002')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setGithubInfo(data);
    //         })
    // }, [])


    const githubInfo = useLoaderData();




    return (
        <div className="bg-orange-400 p-3 w-full">
            <img src={githubInfo.avatar_url} alt=""  width={300}/>
            Github followers : {githubInfo.followers}
        </div>
    )
}


//we call this function using loader.

export const fetchedGithubData = async () =>{
    const response = await fetch ("https://api.github.com/users/uma002");
    return response.json();
}

export default Github
