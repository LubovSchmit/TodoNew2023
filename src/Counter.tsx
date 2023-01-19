import React, {useState} from 'react';


export const Counter = () => {
    let [data, setData] = useState(0)

    return(
        <div onClick={()=> setData(data+1)}>
            {data}
        </div>
    )
}