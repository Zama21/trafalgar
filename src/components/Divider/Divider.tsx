import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.coolGray30};
`;

const Divider: React.FC = () => {
  return <DividerContainer />;
};

export default Divider;
