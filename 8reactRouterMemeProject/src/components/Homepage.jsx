import React, { useState } from 'react'
import { useEffect } from 'react';
import { MemeApiFetch } from '../Api/MemeApiFetch';
import Memecard from './Memecard'

function Homepage() {

    const [allMemes, setAllMemes] = useState([]);


    useEffect(() => {
        MemeApiFetch().then((data) => setAllMemes(data.data.memes));
    }, [])

    console.log(allMemes);

    return (


        <div className="grid grid-cols-4 gap-4">
            {
                allMemes.map(meme => {
                    return <div key={meme.id} >
                        <Memecard name={meme.name} img={meme.url} />
                    </div>
                })
            }
        </div>



    )
}

export default Homepage
