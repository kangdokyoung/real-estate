import React from "react";
import { Map, MapMarker, ZoomControl} from 'react-kakao-maps-sdk';

const Maps = () =>{
    const { kakao } = window;

    return(
        <Map center={{
            lat: 37.541,
            lng: 126.986,
        }}
        style={{
            width:"85vw",
            height:"82vh",
        }}
        level={8}
        >
            <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
            <MapMarker position={{ lat: 37.541, lng: 126.986}}>
                <div style={{color:"#000"}}>Hello World!</div>
            </MapMarker>
        </Map>
    )
}

export default Maps;