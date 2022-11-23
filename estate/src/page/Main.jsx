import React from "react";
import styled from "styled-components";
import List from "../components/list/List";

const Scontainer = styled.div`
    display:flex;
    flex-direction:column;
`


const Main = ()=>{

    return (
        <Scontainer>
            <List />
        </Scontainer>
    )
}

export default Main;