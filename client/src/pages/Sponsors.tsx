import styled from "styled-components";

export default function Sponsors() {
  return (
    <Container className="bg-gradient-to-r from-purple-500 to-pink-400">
      <SponsorItem>
        <h1 className="text-3xl font-semibold text-fuchsia-200">doulingo</h1>
      </SponsorItem>
      <SponsorItem>
        <h1 className="text-3xl font-semibold text-fuchsia-200">
          <i className="bx mx-3 text-4xl bxs-cloud-upload"></i>magic leap
        </h1>
      </SponsorItem>
      <SponsorItem>
        <h1 className="text-3xl font-semibold text-fuchsia-200">
          <i className="bx mx-3 text-4xl bxl-microsoft"></i>Microsoft
        </h1>
      </SponsorItem>
      <SponsorItem>
        <h1 className="text-3xl font-semibold text-fuchsia-200">
          <i className="bx mx-3 text-4xl bx-code-block"></i>Codecov
        </h1>
      </SponsorItem>
      <SponsorItem>
        <h1 className="text-3xl font-semibold text-fuchsia-200">
          <i className="bx mx-3 text-4xl bx-user-pin"></i>Testing
        </h1>
      </SponsorItem>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(75, 94, 178);
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap; /* allow wrapping on small screens */
  padding: 1rem 2rem;

  @media (max-width: 640px) {
    justify-content: center;
    gap: 1.5rem; /* spacing between items when wrapped */
  }
`;

const SponsorItem = styled.div`
  margin: 0 1rem;
  white-space: nowrap;

  @media (max-width: 640px) {
    flex-basis: 100%;
    text-align: center;
    margin: 0.5rem 0;
  }
`;
