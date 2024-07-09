import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

const defaultSelectStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  user-select: none;
`;

const defaultOptionStyle = css`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectContainer = styled.div<{ $customSelectContainerStyles?: ReturnType<typeof css> }>`
  position: relative;
  ${({ $customSelectContainerStyles }) => $customSelectContainerStyles}
`;

const StyledSelect = styled.div<{ $isOpen: boolean; $customSelectStyles?: ReturnType<typeof css> }>`
  ${defaultSelectStyle}

  ${({ $customSelectStyles }) => $customSelectStyles}

  ${({ $isOpen }) =>
    $isOpen &&
    `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`;

const OptionsContainer = styled.div<{ $customOptionsContainerStyles?: ReturnType<typeof css> }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  border: 1px solid #000000;
  border-top: none;
  background-color: white;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;

  ${({ $customOptionsContainerStyles }) => $customOptionsContainerStyles}
`;

const Option = styled.div<{ $customOptionStyles?: ReturnType<typeof css> }>`
  ${defaultOptionStyle}

  ${({ $customOptionStyles }) => $customOptionStyles};
`;

const ArrowIcon = styled.img<{ $isOpen: boolean; $customArrowIconStyles?: ReturnType<typeof css> }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.2s;

  ${({ $customArrowIconStyles }) => $customArrowIconStyles};
`;

interface OptionType {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: OptionType[];
  placeholder?: string | React.ReactNode;
  onChange?: (value: string) => void;
  isClear?: boolean;
  customSelectContainerStyles?: ReturnType<typeof css>;
  customSelectStyles?: ReturnType<typeof css>;
  customOptionStyles?: ReturnType<typeof css>;
  customOptionsContainerStyles?: ReturnType<typeof css>;
  customArrowIconStyles?: ReturnType<typeof css>;
}

const CustomSelectOptions: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
  onChange,
  isClear,
  customSelectStyles,
  customOptionStyles,
  customSelectContainerStyles,
  customOptionsContainerStyles,
  customArrowIconStyles,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <SelectContainer $customSelectContainerStyles={customSelectContainerStyles} ref={selectRef}>
      <StyledSelect $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} $customSelectStyles={customSelectStyles}>
        {typeof placeholder === 'string' ? (
          <span>{selectedOption ? selectedOption.label : placeholder || 'Select an option'}</span>
        ) : (
          placeholder
        )}

        <ArrowIcon
          src="/public/assets/Header/icons/chevron-down.svg"
          alt="ArrowDownIcon"
          $isOpen={isOpen}
          $customArrowIconStyles={customArrowIconStyles}
        />
      </StyledSelect>
      {isOpen && (
        <OptionsContainer $customOptionsContainerStyles={customOptionsContainerStyles}>
          {!isClear && (
            <Option
              key={'uniqueKeyUniqueKey$%Q'}
              onClick={() => {
                setSelectedOption(null);
                setIsOpen(false);
              }}
              $customOptionStyles={customOptionStyles}
            >
              Clear
            </Option>
          )}
          {options.map((option) => (
            <Option
              key={option.value}
              onClick={() => handleOptionClick(option)}
              $customOptionStyles={customOptionStyles}
            >
              {option.label}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </SelectContainer>
  );
};

export default CustomSelectOptions;
