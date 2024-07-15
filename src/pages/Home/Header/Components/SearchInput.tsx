import styled, { css } from 'styled-components';

interface HeaderSearchInputProps {
  wrapperSearchInputStyles?: ReturnType<typeof css>;
  srcImg?: string;
  altImg?: string;
  placeholder?: string;
}

export const SearchInput: React.FC<HeaderSearchInputProps> = ({
  wrapperSearchInputStyles,
  srcImg,
  altImg,
  placeholder,
}) => {
  return (
    <WrapperSearchInput $WrapperSearchInputStyles={wrapperSearchInputStyles}>
      <img src={srcImg} alt={altImg} />
      <Input placeholder={placeholder} />
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
