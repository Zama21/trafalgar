import styled, { css } from 'styled-components';

interface HeaderSearchInputProps {
  wrapperSearchInputStyles?: ReturnType<typeof css>;
}

export const SearchInput: React.FC<HeaderSearchInputProps> = ({ wrapperSearchInputStyles }) => {
  return (
    <WrapperSearchInput $WrapperSearchInputStyles={wrapperSearchInputStyles}>
      <img src="/public/assets/Header/icons/search.svg" alt="SearchIcon" />
      <Input placeholder="Поиск по ..." />
    </WrapperSearchInput>
  );
};

const WrapperSearchInput = styled.div<{ $WrapperSearchInputStyles?: ReturnType<typeof css> }>`
  display: flex;
  padding: 12px 16px 12px 16px;
  flex: 1;
  gap: 8px;
  ${({ $WrapperSearchInputStyles }) => $WrapperSearchInputStyles}

  @media (max-width: 900px) {
    padding: 12px 8px 12px 8px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${({ theme }) => theme.typography.bodyM}
  width: 100%;
`;
