import styled from "styled-components";
import CommonNav from "../components/CommonNav";

export default function StudentDashboard() {
  return (
    <Container>
      <CommonNav />
      <p>StudentDashboard</p>
    </Container>
  );
}
const Container = styled.div`
  background: #ffeeff;
  height: 100vh;
  padding: 10px;
`;
