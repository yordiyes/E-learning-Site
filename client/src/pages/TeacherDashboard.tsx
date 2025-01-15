import styled from "styled-components";
import CommonNav from "../components/CommonNav";

export default function TeacherDashboard() {
  return (
    <Container>
      <CommonNav />

      <p>TeacherDashboard</p>
    </Container>
  );
}
const Container = styled.div`
  background: #ffeeff;
  height: 100vh;
  padding: 10px;
`;
