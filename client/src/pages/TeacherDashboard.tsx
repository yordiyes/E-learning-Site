import styled from "styled-components";
import SideBar from "../components/TeachSideBar";

export default function TeacherDashboard() {
  return (
    <Container >
      <div>
        <SideBar />
      </div>
      <div className="inner-container">
        <p>TeacherDashboard</p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background:rgb(160, 139, 160);
  height: 100vh;
  display: flex;
  .inner-container {
    padding: 15px;
  }
`;
