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
    justify-content:center
`

const Ssel_year = styled.select`
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

const Banner = () =>{
    const [year, setYear] = useState(2015);

    const changeYear = (e) =>{
        setYear(e.target.value);
    }
    return(
        <Scontainer>
            <Smain>
                <Link to={'/'} style={{ textDecoration: 'none', color : 'white'}}>Main</Link>
            </Smain>
            
            <div />
            <div />
            <Sselect>
                <Ssel_year type="number" onChange={(e)=>{changeYear(e)}}>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </Ssel_year>
            </Sselect>
            <div />
            <Sgraph>
                <Link to={'/graph'} style={{ textDecoration: 'none', color : 'white'}}>Graph</Link>
            </Sgraph>
        </Scontainer>
    )
}

export default Banner;