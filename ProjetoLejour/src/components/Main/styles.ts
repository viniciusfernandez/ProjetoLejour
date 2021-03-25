import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;

  min-height: 500px;
`;

export const Header = styled.div`
  border-radius: 30px;
  padding: 36px;
  background: #fff;
  box-shadow: 0 0 2px rgba(66, 66, 66, 0.05), 0 0 4px rgba(97, 97, 97, 0.05),
    0 0 8px rgba(66, 66, 66, 0.05), 0 0 16px rgba(33, 33, 33, 0.05);
`;

export const Data = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 24px;
`;
