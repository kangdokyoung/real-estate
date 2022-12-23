import React from "react";
import { useState } from "react";
import { CustomOverlayMap, Map, MapMarker, Polygon, ZoomControl } from "react-kakao-maps-sdk";
import { useJson } from "./useJson";
import styled from "styled-components";
//import { ThemeProvider } from "styled-components"; // 넣어보기
import { useEffect } from "react";
import axios from 'axios';
import { DetailInformation, selectedYear } from "../../Atoms/atom";
import { useRecoilState } from "recoil";
import { useMarker } from "./useMarker";

const Sdiv = styled.div`
  position:relative;
  top: -20px;
  width: 0px;
`

const SpolygonButton = styled.button`
  position: absolute;
  width: 200px;
  height: 50px;
  background-color:white;
  border: 1px solid black;
  z-index:100;
  :hover{
    cursor:pointer;
  }
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
    const [polygon, setPolygon] = useState(true);
    const [info, setInfo] = useRecoilState(DetailInformation);
    const [markerList] = useMarker(info);
    const [marker,setMarker] = useState(markerList);
    const [year, setYear] = useRecoilState(selectedYear);

    useEffect(()=>{
      axios({
        url: `http://localhost:2005/readAll/${year}`,
        method: 'get',
        withCredentials: true,
      }).then((res)=>{
        console.log(res.data.data);
        setInfo(res.data.data);
      })
    },[year])

    const changePolygon = ()=>{
      if (polygon === true) {
        setPolygon(false);
      }else{
        setPolygon(true);
      }
      console.log(polygon);
    }

  return (
    <>
      <Map
        center={{
          lat: 37.541,
          lng: 126.986,
        }}
        style={{
          width: "85vw",
          height: "90vh",
        }}
        level={8}
        onMouseMove={(_map, mouseEvent)=>setMousePosition({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        })}
      >
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        {marker && marker.map((data, i)=>
          <MapMarker position={data.location} />
        )}
        {polygon === true && area.map((area, index)=>(
          <Polygon
          key={`polygon-${area.name}`}
          path={area.path}
          strokeWeight={2}
          strokeColor={"#004c80"}
          strokeOpacity={0.8}
          fillColor={area.isMouseover ? "#09f" : "#fff"}
          fillOpacity={0.5}
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
        {overLay === 1 && polygon === true && (
          <CustomOverlayMap position={mousePosition} zIndex={-1000} yAnchor={1}>
            <Sdiv className="area">{area.find((v)=>v.isMouseover).name}</Sdiv>
          </CustomOverlayMap>
        )}
      </Map>
      <SpolygonButton onClick={()=>{changePolygon()}}>
          폴리곤
      </SpolygonButton>
      <button onClick={()=>{console.log(markerlist)}}>
        ddddddd
      </button>
    </>
  );
};

export default Maps;
