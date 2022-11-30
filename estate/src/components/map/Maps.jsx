import React from "react";
import { useState } from "react";
import { CustomOverlayMap, Map, MapMarker, Polygon, ZoomControl } from "react-kakao-maps-sdk";
import { useJson } from "./useJson";
import styled from "styled-components";


const Sdiv = styled.div`
  position:relative;
  top: -20px;
  width: 0px;
`

const Maps = () => {
    const { kakao } = window;
    const [polygonList] = useJson();
    const [area, setArea] = useState(polygonList);
    const [mousePosition, setMousePosition] = useState({
      lat: 0,
      lng: 0,
    });
    const [overLay, setOverLay] = useState(0);

  return (
    <Map
      center={{
        lat: 37.541,
        lng: 126.986,
      }}
      style={{
        width: "85vw",
        height: "82vh",
      }}
      level={8}
      onMouseMove={(_map, mouseEvent)=>setMousePosition({
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      })}
    >
      <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
      <MapMarker position={{ lat: 37.541, lng: 126.986 }}>
        <div style={{ color: "#000" }}>맵 띄움</div>
      </MapMarker>
      {area.map((area, index)=>(
        <Polygon
        key={`polygon-${area.name}`}
        path={area.path}
        strokeWeight={2}
        strokeColor={"#004c80"}
        strokeOpacity={0.8}
        fillColor={area.isMouseover ? "#09f" : "#fff"}
        fillOpacity={0.7}
        onMouseover={() =>{
          setArea((prev) => [
            ...prev.filter((_, i) => i !== index),
            {
              ...prev[index],
              isMouseover: true,
            },
          ])
          setOverLay(1);
        }
        }
        onMouseout={() =>{
          setArea((prev) => [
            ...prev.filter((_, i) => i !== index),
            {
              ...prev[index],
              isMouseover: false,
            },
          ])
          setOverLay(0);
        }
        }
      />
      ))}
      {overLay === 1 && (
        <CustomOverlayMap position={mousePosition} zIndex={-1000} yAnchor={1}>
          <Sdiv className="area">{area.find((v)=>v.isMouseover).name}</Sdiv>
        </CustomOverlayMap>
      )}
    </Map>
  );
};

export default Maps;
