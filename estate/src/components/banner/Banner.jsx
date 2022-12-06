import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const  Scontainer = styled.div`
    display:flex;
    justify-content:space-around;
    height: 10vh;
    width: 100%;
    background-color: #68EDFF;
`

const Smain = styled.div`
    font-size: 32px;
    color: white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    cursor:pointer;
`

const Sgraph = styled.div`
    font-size: 32px;
    color: white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    cursor:pointer;
`

const Sselect = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-left: 400px;
    margin-right: 200px;
    border:none;
`

const SselYear = styled.select`
    width: 80px;
    height: 40px;
    text-align: center;
    background-color: white;
    border: none;
    border-radius: 15px;
    appearance: none;
    font-weight: bold;
    font-size: 20px;
    color: black;
    :hover{
        background-color:#FFFDFD;
        cursor:pointer;
    }
`
// 배너에 글씨 테두리 회색으로 해놓으면 가독성 좋아짐
const Banner = () =>{
    const [, setYear] = useState(2015);

    const changeYear = (e) =>{
        setYear(e.target.value);
    }

    const yearOption = [
        { value : 2015, data : 2015 },
        { value : 2016, data : 2016 },
        { value : 2017, data : 2017 },
        { value : 2018, data : 2018 },
        { value : 2019, data : 2019 },
        { value : 2020, data : 2020 },
        { value : 2021, data : 2021 },
        { value : 2022, data : 2022 },
    ]
    return(
        <Scontainer>
            <Smain>
                <Link to={'/'} style={{ textDecoration: 'none', color : 'white'}}>Main</Link>
            </Smain>

            <Sselect>  
                <SselYear type="number" onChange={(e)=>{changeYear(e)}}>
                    {yearOption.map((option, i) =>(
                        <option key={i} value={option.value}>{option.data}</option>
                        ))
                    }
                </SselYear>
            </Sselect>
            <Sgraph>
                <Link to={'/graph'} style={{ textDecoration: 'none', color : 'white'}}>Graph</Link>
            </Sgraph>
        </Scontainer>
    )
}

export default Banner;