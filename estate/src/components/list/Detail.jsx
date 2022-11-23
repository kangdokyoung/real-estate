import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { converse, DetailInformation } from "../../Atoms/atom";

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

const ScloseBtn = styled.button`
    width: 80px;
    border: 1px solid #FFFDFD:
    border-radius: 12px;
    margin-top:15px;
    :hover{
        cursor:pointer;
    }
`

const Detail = ()=>{
    const [info, ] = useRecoilState(DetailInformation)
    const [, setConv] = useRecoilState(converse);

    return(
        <>
        <Scontainer>
            <Sdetail>
                이름: {info.name} <br />
                주소: {info.adress} <br />
                자치구 명: {info.place} <br />
                계약일: {info.contract} <br />
                건물 가격: {info.price}억 <br />
                거래 횟수: {info.count}회 <br />
                가격 상승률: {info.rise}% <br />
                건물 면적: {info.barea}평 <br />
                토지 면적: {info.larea}평 <br />
                층: {info.floor} <br />
                건축 년도: {info.build} <br />
                건축 용도: {info.for} <br />
                접수 연도: {info.regist} <br />
            </Sdetail>
            <ScloseBtn onClick={()=>{setConv(0)}}>
                닫기
            </ScloseBtn>
        </Scontainer>
        </>
    )
}

export default Detail;