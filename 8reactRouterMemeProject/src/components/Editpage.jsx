import React, { createRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { exportComponentAsJPEG } from 'react-component-export-image';
import Addtext from './Addtext';

function Editpage() {
    //this is now we fetch img url from url
    const [params] = useSearchParams();

    const [countText, setCountText] = useState(0);

    const memeRef = createRef();

    //making a function when user clicks on the button

    function addText() {
        setCountText(countText + 1);
    }
    return (
        <div>
            <h3 className="bg-purple-600 p-3">Edit Your Meme</h3>

            <div  ref={memeRef}>
                <div className="mt-5 bottom-3 p-4 meme">
                    <img src={params.get('url')} alt="" width={300} />
                </div>
                {Array(countText).fill(0).map((e) => <Addtext />)}
            </div>

            <div className="p-3 mt-5">
                <button onClick={addText} className="bg-red-600 p-3">Add Text</button>
                <button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)} className="bg-green-600 p-3">Save</button>
            </div>
        </div>
    )
}

export default Editpage
