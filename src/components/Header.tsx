import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>expense tracker</h1>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    height: 9rem;
    background-color:var(--clr-blue-1);
    color: var(--clr-white);
    max-width: 56,25rem;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    text-transform: capitalize;

    h1 {
        margin: 0;
    }
`;