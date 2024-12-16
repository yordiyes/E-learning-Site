import styled from "styled-components";

export default function Show() {
  return (
    <Container>
      <div className="p-4">
        <h1 className="text-5xl font-bold lg:text-6xl sm:text-4xl">
          Develop your skills <br /> in a new <br /> and unique way
        </h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(249, 220, 247);
  min-height: 100vh; /* Makes the container fill the viewport height */
  display: flex;
  align-items: center;  
  justify-content: center; /* Center the content */
`;
