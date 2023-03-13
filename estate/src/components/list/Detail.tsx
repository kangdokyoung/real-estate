import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { converse, DetailInformation, selectedBuilding } from "../../Atoms/atom";

const Scontainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    align-items:center;
`
const Sdetail = styled.div`
    width: 90%;
    border: 1px solid black;
    border-radius: 12px;
    margin-top: 15px;
    padding-left: 10px;
    line-height: 40px;
    :hover{
        cursor:pointer;
    }
`

type DataType = {
    id : number,
    x: number,
    y: number,
    건물면적: number,
    건물명: string,
    건물용도: string,
    건축년도: number,
    계약일: number,
    도로명주소: string,
    물건금액: number,
    법정동명: string,
    법정동코드: number,
    본번: number,
    부번: number,
    자치구명: string,
    자치구코드: number,
    접수연도: number,
    층: number,
    토지면적: string,
}

const Detail = ()=>{
    const [info, ] = useRecoilState(DetailInformation);
    const [selected] = useRecoilState(selectedBuilding);
    const [, setConv] = useRecoilState(converse);
    const [view, setView] = useState<DataType>();

    useEffect(()=>{
        if (selected !== 0) {
            setView(info.filter(v => v.id === selected)[0]);
            console.log(info.filter(v => v.id === selected));
        }
    },[selected])

    return(
        <>
        <Scontainer>
            {view && <Sdetail onClick={()=>{setConv(0);}}>
                이름: {view.건물명} <br />
                주소: {view.도로명주소} <br />
                자치구 명: {view.자치구명} <br />
                계약일: {view.계약일} <br />
                건물 가격: {view.물건금액}만 <br />
                건물 면적: {view.건물면적}평 <br />
                토지 면적: {view.토지면적}평 <br />
                층: {view.층} <br />
                건축 년도: {view.건축년도} <br />
                건축 용도: {view.건물용도} <br />
                접수 연도: {view.접수연도} <br />
            </Sdetail>}
        </Scontainer>
        </>
    )
}

export default Detail;