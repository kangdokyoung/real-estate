import { useState } from "react";


export function useMarker (array) {
    const [list,] = useState(array);

    let nameList = list.map((data, i) =>{
        const nameData = data.건물명
        return nameData;
    })

    let location = list.map((data, i)=>{
        const locData = {lng: data.y, lat: data.x};
        return locData;
    })

    let markerList = list.map((data, i)=>{
        return{
            name: nameList[i],
            isMouseover: false,
            location: location[i],
        }
    })

    return [markerList]
}