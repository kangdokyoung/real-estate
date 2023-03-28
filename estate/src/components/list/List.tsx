import React, { useEffect } from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Building from "./Building";
import { useRecoilState } from "recoil";
import { converse, dataSort, DetailInformation, informationCount, selectedYear } from "../../Atoms/atom";
import Detail from "./Detail";
import axios from "axios";


const Scontainer = styled.div`
    padding: 9px;
    width: 15vw;
    height: 87vh;
    display:flex;
    flex-direction:column;
    margin-top: 20px;
    overflow:auto;
`

const List = () =>{
    const [sort, setSort] = useRecoilState(dataSort);
    const [conv, ] = useRecoilState(converse);
    const [, setInfoCount] = useRecoilState(informationCount);
    const [, setInfo] = useRecoilState(DetailInformation); // 데이터 atom으로 옮기는
    const [year, ] = useRecoilState(selectedYear); // 년도 

    const handleChange = (e:SelectChangeEvent<string>)=>{
        setSort(e.target.value);
    }

    useEffect(()=>{
        console.log(sort);
        if(sort === 'count'){
            axios({
                url: `http://localhost:2005/readCount`,
                method: 'get',
                withCredentials: true,
              }).then((res)=>{
                console.log(res.data.data);
                setInfoCount(res.data.data);
              })
        }else if(sort === 'price' || sort === 'name'){
            axios({
                url: `http://localhost:2005/readSort/${year}/${sort}`,
                method: 'get',
                withCredentials: true,
              }).then((res)=>{
                console.log(res.data.data);
                setInfo(res.data.data);
              })
        }
    },[sort])

    return (
        <>
        <Scontainer>
        {
            conv === 0 && 
            <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="sort-list">정렬</InputLabel>
                    <Select
                    labelId="sort-list"
                    value={sort}
                    label="sort"
                    onChange={handleChange}
                    >
                    <MenuItem value={'count'}>거래 횟수</MenuItem>
                    <MenuItem value={'price'}>건물 가격</MenuItem>
                    <MenuItem value={'name'}>이름</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Building />
            </>
        }
        {
            conv === 1 &&
            <Detail />
        }
        </Scontainer>
        </>
    )
}

export default List;