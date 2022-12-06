import React, { useState } from "react";
import Chart from "react-google-charts";
import styled from "styled-components";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Scontainer = styled.div`
  display:flex;
  margin-top:1vh;
  margin-left:3vw;
`

const Stitle = styled.h1`
  margin-left: 100px;
`

const Graph = ()=>{
    const [sort, setSort] = useState('');
    const data = [
        ["", "Counst"],
        ["성동구", 1000],
        ["강진구", 1170],
        ["강남구", 660],
        ["송파구", 1030],
      ];

      const option = {
        chart: {
        },
      };

      const handleChange = (e)=>{
        setSort(e.target.value);
      }

    return(
      <>
        <Stitle> 구역별 통계</Stitle>
        <Scontainer>
          <Chart 
              chartType="Bar"
              width="80%"
              height="82vh"
              data={data}
              options={option}
          />
          <Box sx={{ minWidth: 120, width: '10vw' }}>
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
                    <MenuItem value={'pirce'}>건물 가격 평균</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Scontainer>
      </>
    )
}

export default Graph;