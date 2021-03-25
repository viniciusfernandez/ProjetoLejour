import styled from "styled-components";

export const Container = styled.div`
  border-radius: 30px;
  padding: 36px;
  background: #fff;
  box-shadow: 0 0 2px rgba(66, 66, 66, 0.05), 0 0 4px rgba(97, 97, 97, 0.05),
    0 0 8px rgba(66, 66, 66, 0.05), 0 0 16px rgba(33, 33, 33, 0.05);

  max-height: 250px;

  strong {
    font-size: 18px;
  }
`;

export const Graph = styled.div`
  margin-top: 15px;
`;

export const Button = styled.button`
  padding-right: 24px;
  padding-left: 24px;
  border-radius: 40px;
`;
