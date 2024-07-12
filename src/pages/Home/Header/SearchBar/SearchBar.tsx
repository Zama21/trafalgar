import React from 'react';
import styled, { css } from 'styled-components';
import CustomSelectOptions from '../../../../components/CustomSelectOptions/CustomSelectOptions';
import { MEDICAL_SPECIALTY_OPTIONS } from '../сonstants';
import { SearchInput } from '../Components/SearchInput';

interface CustomSelectProps {
  searchContainerStyles?: ReturnType<typeof css>;
  selectContainerStyles?: ReturnType<typeof css>;
  selectStyles?: ReturnType<typeof css>;
}

const SearchBar: React.FC<CustomSelectProps> = ({ searchContainerStyles, selectContainerStyles, selectStyles }) => {
  return (
    <SearchBarContainer $ContainerStyles={searchContainerStyles}>
      <SearchInput />
      <CustomSelectOptions
        options={MEDICAL_SPECIALTY_OPTIONS}
        placeholder="Все категории"
        onChange={handleChange}
        customSelectContainerStyles={customSelectContainerStyles(selectContainerStyles)}
        customSelectStyles={customSelectStyles(selectStyles)}
        customOptionsContainerStyles={customOptionsContainerStyles}
        customOptionStyles={customOptionStyles}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;

const handleChange = (value: string) => {
  console.log('Selected value:', value);
};

const SearchBarContainer = styled.div<{ $ContainerStyles?: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  flex: 1;
  height: 48px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray30};
  background-color: ${({ theme }) => theme.colors.coolGray10};
  ${({ $ContainerStyles }) => $ContainerStyles}
`;

const customSelectStyles = (selectStyles?: ReturnType<typeof css>) => css`
  height: 48px;
  border: none;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.coolGray30};
  padding: 12px 16px 12px 16px;
  gap: 8px;
  white-space: nowrap;
  ${({ theme }) => theme.typography.bodyM}
  ${selectStyles}

@media (max-width: 900px) {
    padding: 12px 8px 12px 8px;
  }
`;

const customOptionsContainerStyles = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 340px;
  max-height: 266px;
  padding: 13px 16px 13px 16px;
  gap: 16px;
`;

const customOptionStyles = css`
  padding: 0;
`;
const customSelectContainerStyles = (selectContainerStyles?: ReturnType<typeof css>) => css`
  width: auto;
  ${selectContainerStyles};
`;
