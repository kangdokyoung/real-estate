import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import styled from "styled-components";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios, { AxiosResponse } from "axios";
import { useRecoilState } from "recoil";
import { selectedYear } from "../../Atoms/atom";
import { SelectChangeEvent } from "@mui/material/Select";

const Scontainer = styled.div`
  display:flex;
  margin-top:1vh;
  margin-left:3vw;
`

const Stitle = styled.h1`
  margin-left: 100px;
`

const SdefChart = styled.div`
  width: 80%;
  height: 82vh;
  text-align:center;
`
type GraphData = {
  success:number,
  data: { 자치구명: string, 'COUNT(*)':number}[]
}

const Graph = ()=>{
    const [sort, setSort] = useState('');
    const [year,] = useRecoilState(selectedYear);
    const [chartData, setChartData] = useState([]);

      const option = {
        chart: {
        },
      };

      const handleChange = (e:SelectChangeEvent<string>)=>{
        setSort(e.target.value);
      }

      useEffect(()=>{
        if (sort !== '') {
          console.log(sort);
          axios({
            url: `http://localhost:2005/readChart/${year}/${sort}`,
            method: 'get',
            withCredentials: true,
          }).then((res:AxiosResponse<GraphData>)=>{
            console.log(res);
            setChartData(res.data.data.map((data)=>Object.values(data)));
          })
        }
      },[sort, year])

    return(
      <>
        <Stitle> 구역별 통계</Stitle>
        <Scontainer>
          {sort === '' ? 
          <SdefChart>목록을 선택해주세요.</SdefChart> 
          :<Chart 
              chartType="Bar"
              width="88%"
              height="82vh"
              data={[["지역", "거래횟수"], ...chartData]}
              options={option}
          />}
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
                  <MenuItem value={'price'}>건물 가격 평균</MenuItem>
                </Select>
            </FormControl>
          </Box>
        </Scontainer>
      </>
    )
}

export default Graph;