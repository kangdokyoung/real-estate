import React, { useState } from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Building from "./Building";
import { useRecoilState } from "recoil";
import { buildingList, converse } from "../../Atoms/atom";
import Detail from "./Detail";


const Scontainer = styled.div`
    padding: 20px;
    width: 15vw;
    height: 80vh;
    display:flex;
    flex-direction:column;
    margin: 20px;
    overflow:auto;
`

const List = () =>{
    const [sort, setSort] = useState('');
    const [conv, setConv] = useRecoilState(converse);
    const [list, setList] = useRecoilState(buildingList);

    const handleChange = (e)=>{
        setSort(e.target.value);
    }

    return (
        <>
        <Scontainer>
        {
            conv == 0 && 
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
                    <MenuItem value={'rise'}>가격 상승률</MenuItem>
                    <MenuItem value={'pirce'}>건물 가격</MenuItem>
                    <MenuItem value={'name'}>이름</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Building />
            </>
        }
        {
            conv == 1 &&
            <Detail />
        }
        </Scontainer>
        </>
    )
}

export default List;