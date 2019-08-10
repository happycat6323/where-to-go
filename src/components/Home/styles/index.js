import styled from 'styled-components';

export const Root = styled.div`
  color: #4B4E2A;
`;

export const Header = styled.div`
  padding: 56px;
  font-size: 24px;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const PeasantCalendar = styled.div`
  border-radius: 2px;
  border: 2px solid #4B4E2A;
  width: 360px;
  height: fit-content;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Date = styled.div`
  width: 240px;
  font-size: 150px;
  font-weight: 800;
  padding: 48px;
  text-align: center;
  color: #B5CAA0;

  div:last-child {
    font-size: 18px;
    margin-top: 5px;
    color: #4B4E2A;
  }
`;

export const Year = styled.div`
  font-size: 12px;
  padding: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  border-left: 2px solid #4B4E2A;

  div:last-child {
    font-size: 16px;
    font-weight: 500;
    padding-right: 10px;
  }
`;

export const Fortune = styled.div`
  font-size: 16px;
  padding: 20px;
  border-top: 2px solid #4B4E2A;
`;
