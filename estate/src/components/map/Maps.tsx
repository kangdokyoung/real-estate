import React from "react";
import { useState } from "react";
import { CustomOverlayMap, Map, MapMarker, Polygon, ZoomControl } from "react-kakao-maps-sdk";
import { useJson } from "./useJson";
import styled from "styled-components";
//import { ThemeProvider } from "styled-components"; // 넣어보기
import { useEffect } from "react";
import axios from 'axios';
import { converse, DetailInformation, filteredInformation, markerOverlay, selectedBuilding, selectedYear } from "../../Atoms/atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Sdiv = styled.div`
  position:relative;
  top: -20px;
  width: 0px;
`

const SonoffButton = styled.div`
  position: absolute;
  z-index: 100;
  display:flex;
  flex-direction:column;
`

const SpolygonButton = styled.button`
  width: 100px;
  height: 40px;
  background-color:white;
  border: 1px solid black;
  :hover{
    cursor:pointer;
  }
`

const SmarkerButton = styled.button`
  width: 100px;
  height: 40px;
  background-color:white;
  border: 1px solid black;
  :hover{
    cursor:pointer;
  }
`

const Maps = () => {
    const { kakao } = window;
    //폴리곤 좌표
    const [polygonList] = useJson();
    const [area, setArea] = useState(polygonList);

    const [mousePosition, setMousePosition] = useState({ // 마우스 좌표 
      lat: 0,
      lng: 0,
    });
    const [overLay, setOverLay] = useState(0); //폴리곤 오버레이 
    const [markerOver, setMarkerOver] = useRecoilState(markerOverlay); //마커 오버레이

    const [polygon, setPolygon] = useState(true); // 폴리곤 on/off
    const [marker, setMarker] = useState(true); // 마커 on/off

    const [, setInfo] = useRecoilState(DetailInformation); // 데이터 atom으로 옮기는

    const [year, ] = useRecoilState(selectedYear); // 년도 
    const marker1 = useRecoilValue(filteredInformation); // 마커 가공 

    const [, setConv] = useRecoilState(converse); // 건물 상세정보 변경
    const [, setSel] = useRecoilState(selectedBuilding); // 선택된 건물 id
 
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

    const changeMarker = ()=>{
      if (marker === true) {
        setMarker(false);
      }else{
        setMarker(true);
      }
      console.log(marker);
    }

    const conversion = (id:number)=>{
      setSel(id);
      setConv(1);
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

        {marker === true && marker1.map((data, i)=>
          <MapMarker 
          position={data.location}
          key={i}
          onMouseOver={()=>{
            setMarkerOver(data.id);
          }}
          onMouseOut={()=>{
            setMarkerOver(0);
          }}
          onClick={()=>{
            conversion(data.id)
          }}
          >
            {markerOver === data.id && <div style={{ padding: "5px", color: "#000" }}>{data.name}</div>}
          </MapMarker>
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

      <SonoffButton>
        <SpolygonButton onClick={()=>{changePolygon()}}>
            폴리곤
        </SpolygonButton>
        <SmarkerButton onClick={()=>{changeMarker()}}>
            마커
        </SmarkerButton>
      </SonoffButton>
    </>
  );
};

export default Maps;
