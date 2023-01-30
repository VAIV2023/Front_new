import { Collapse, List, ListItemButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AboutSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 100%;
`;

const NestedListHeader = styled.div`
  color: #0c4426;
  font-size: 1.6rem;
  margin-top: 1vh;
  margin-left: 1vw;
  font-weight: 800;
  white-space:nowrap;
    @media screen and (max-width: 1200px){
     display: none;
  }
`;

const MenuLink = styled(Link)`
  color: #0c4426;
  text-decoration: none;
  font-size: 1.3rem;
  margin-left: 1vw;
  font-weight: 800;
  white-space:nowrap;
    @media screen and (max-width:768px){
    font-size: 0.8rem;
  }
`;

function AboutSideBar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AboutSideBarContainer>
      <List>
        <ListItemButton
          onClick={() => navigate("/about/main")}
          sx={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderBottom: "1px solid",
          }}
        >
          <MenuLink style={{ fontSize: "20px" }} to={"/about/main"}>
            소개
          </MenuLink>
        </ListItemButton>
        <ListItemButton onClick={handleClick} sx={{ paddingTop: "15px" }}>
          <NestedListHeader>스꾸도 사용방법</NestedListHeader>
        </ListItemButton>
        <Collapse in={open}>
          <List>
            <ListItemButton onClick={() => navigate("/about/apply")}>
              <MenuLink to={"/about/apply"}>동아리 지원</MenuLink>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/about/makeclub")}>
              <MenuLink to={"/about/makeclub"}>동아리 생성</MenuLink>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/about/mypage")}>
              <MenuLink to={"/about/mypage"}>개인 정보</MenuLink>
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/about/manage")}>
              <MenuLink to={"/about/manage"}>동아리 관리</MenuLink>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </AboutSideBarContainer>
  );
}

export default AboutSideBar;