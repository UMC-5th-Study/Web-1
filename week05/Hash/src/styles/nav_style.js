import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav_div = styled.div`
    width : 100vw;
    padding : 10px 0px 10px 200px;
    display: flex;
    background-color : #032541;
`
const Nav_ul = styled.div`
    width : 200px;
    padding : 3px 0px 3px 30px;
    display : flex;
    justify-content: space-around;
`
const Menu_li = styled.li`
    color : white;
    float: left;
`
const StyleLink = styled(Link)`
    color : white;
    text-decoration : none;
`
export default {Nav_div, Nav_ul, Menu_li, StyleLink};