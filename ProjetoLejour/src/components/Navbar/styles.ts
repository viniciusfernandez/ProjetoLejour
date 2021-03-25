import styled from "styled-components";

export const Container = styled.div`
  padding: 12px 24px 12px 12px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(66, 66, 66, 0.05), 0 4px 4px rgba(97, 97, 97, 0.05);

  display: flex;
  justify-content: space-between;

  img {
    height: 40px;
  }
`;

export const ProfileInfo = styled.div`
  border: 1px solid #68bfb7;
  padding: 6px 12px 6px 18px;
  border-radius: 30px;
  color: #68bfb7;

  strong {
    font-size: 13px;
  }

  p {
    font-size: 13px;
  }
`;
