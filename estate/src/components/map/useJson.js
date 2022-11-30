import { useState } from "react"
import geojson from "../../TL_SCCO_SIG.json";

export function useJson() {
    const [area, ] = useState(geojson);

    let data = area.features.map((point, i)=>{
        const jsonData = point.geometry.coordinates[0].map((data, j)=>{
            const pointData = { lng : data[0], lat : data[1]};
            return pointData; 
        })
        return jsonData;
      });
      
      let nameList = area.features.map((data, i)=>{
        const nameData = data.properties.SIG_KOR_NM;
        return nameData;
      })
      
      let polygonList = area.features.map((point, i)=>{
        return {
            name: nameList[i],
            isMouseover: false,
            path: data[i]
        }
      })

    return [polygonList]
}