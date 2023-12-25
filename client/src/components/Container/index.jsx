import styled from "styled-components";
import SideBar from "../SideBar/index.jsx";
import Main from "../Main/index.jsx";
import Content from "../Content/index.jsx";
import {useContext} from "react";
import {Context} from "../../contexts/AuthContext.jsx";
import NavBar from "../NavBar/index.jsx";
import Footer from "../Footer/index.jsx";
import {Helmet} from "react-helmet";
import Favicon from '../../assets/img/Instagram_logo_svg.svg';

const ContainerMain = styled.div`
  display: flex;
  height: 100vh;
`

export default function Container({children, width}) {
    const {user, currentUser} = useContext(Context);

    return (
        <>
            <Helmet>
                <link data-default-icon={Favicon} rel="icon" sizes="192x192" href={Favicon} type="image/png"/>
                <title>Instagram</title>
            </Helmet>
            <ContainerMain style={{flexDirection: user && currentUser ? "row" : "column"}}>
                {user && currentUser ? <SideBar/> : <NavBar/>}
                <Main>
                    {width ? children : <Content>{children}</Content>}
                    {!user && !currentUser && <Footer/>}
                </Main>
            </ContainerMain>
        </>
    )
}