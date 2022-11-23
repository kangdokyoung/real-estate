import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { buildingList, converse, selectedBuilding } from "../../Atoms/atom";

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
    const [list, ] = useRecoilState(buildingList);
    const [, setConv] = useRecoilState(converse);
    const [, setSel] = useRecoilState(selectedBuilding);

    const conversion = (name)=>{
        setSel(name);
        setConv(1);
    }

    return(
        <>
        <Slist>
            {list.map((data, i)=>{
                return(
                    <SbuildingList key={i} onClick={()=>{conversion(data.name)}}>
                        이름: {data.name} <br />
                        거래 횟수: {data.count}회 <br />
                        가격 상승률: {data.rise}% <br />
                        건물 가격: {data.price}억
                    </SbuildingList>
                )   
            })}

        </Slist>
        </>
    )
}

export default Building;