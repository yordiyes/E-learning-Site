import styled from "styled-components";
import SideBar from "../components/StudSideBar";

export default function StudentDashboard() {
  return (
    <Container>
      <div>
        <SideBar />
      </div>
      <div className="inner-container">
        <p>StudentDashboard</p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: rgb(160, 139, 160);
  height: 100vh;
  display: flex;
  .inner-container {
    padding: 15px;
  }
`;
