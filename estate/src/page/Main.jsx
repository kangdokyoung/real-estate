import React from "react";
import styled from "styled-components";
import List from "../components/list/List";
import Maps from "../components/map/Maps";

const Scontainer = styled.div`
    display:flex;
`


const Main = ()=>{

    return (
        <Scontainer>
            <Maps />
            <List />
        </Scontainer>
    )
}

export default Main;