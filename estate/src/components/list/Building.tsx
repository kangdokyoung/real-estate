import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { converse, dataSort, DetailInformation, informationCount, markerOverlay, selectedBuilding } from "../../Atoms/atom";

const Slist = styled.li`
    display:flex;
    flex-direction: column;
`

const SbuildingList = styled.ol`
    border: 1px solid black;
    border-radius: 12px;
    margin-top: 15px;
    padding-left: 10px;
    :hover{
        cursor:pointer;
    }
`

const Building = ()=>{
    const [list, ] = useRecoilState(DetailInformation);
    const [, setConv] = useRecoilState(converse);
    const [, setSel] = useRecoilState(selectedBuilding);
    const [infoCount] = useRecoilState(informationCount);
    const [sort, ] = useRecoilState(dataSort);

    const [markerOver, setMarkerOver] = useRecoilState(markerOverlay); //마커 오버레이

    const conversion = (id:number)=>{
        setSel(id);
        setConv(1);
    }

    return(
        <>
        <Slist>
            {sort != 'count' && list.map((data, i)=>{
                return(
                    <SbuildingList key={i}
                    onClick={()=>{conversion(data.id)}}
                    onMouseOver={()=>{
                        setMarkerOver(data.id)
                    }}
                    onMouseOut={()=>{
                        setMarkerOver(0)
                    }}
                    >
                        이름: {data.건물명} <br />
                        건축 년도: {data.건축년도} <br />
                        건물 위치: {data.법정동명} <br />
                        건물 가격: {data.물건금액}만
                    </SbuildingList>
                )   
            })}
            {sort == 'count' && infoCount.map((data, i)=>{
                return(
                    <SbuildingList key={i} onClick={()=>{conversion(data.id)}}>
                        이름: {data.건물명} <br />
                        거래 횟수: {data["COUNT(*)"]}
                    </SbuildingList>
                )
            })}

        </Slist>
        </>
    )
}

export default Building;