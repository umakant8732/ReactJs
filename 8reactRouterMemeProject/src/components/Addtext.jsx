import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Addtext() {

    const [isEdit, setIsEdit] = useState(false);
    const [remove, setRemove] = useState(true);
    const [value, setValue] = useState("Double click To Edit");
    return (
        <Draggable>
            {
                isEdit?
                    <div>
                        <input value={value} onChange={(e) => setValue(e.target.value)} onDoubleClick={(e) => setIsEdit(false)} />
                    </div>
                    :
                    <div>
                        <h2 onDoubleClick={(e) => setIsEdit(true)} >{value}</h2>
                    </div>
            }
        </Draggable>
    )
}

export default Addtext
