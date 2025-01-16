import styled from "styled-components";

export default function Sponsors() {
  return <Container className="bg-gradient-to-r from-purple-500 to-pink-400">
    <h1 className="text-3xl font-semibold text-fuchsia-200">doulingo</h1>
    <h1 className="text-3xl font-semibold text-fuchsia-200"><i className='bx mx-3 text-4xl bxs-cloud-upload'></i>magic leap</h1>
    <h1 className="text-3xl font-semibold text-fuchsia-200"><i className='bx mx-3 text-4xl bxl-microsoft'></i>Microsoft</h1>
    <h1 className="text-3xl font-semibold text-fuchsia-200"><i className='bx mx-3 text-4xl bx-code-block'></i>Codecov</h1>
    <h1 className="text-3xl font-semibold text-fuchsia-200"><i className='bx mx-3 text-4xl bx-user-pin'></i>Testing</h1>
  </Container>;
}
const Container = styled.div`
  background-color: rgb(75, 94, 178);
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
