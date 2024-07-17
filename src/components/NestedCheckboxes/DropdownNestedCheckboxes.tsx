import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import NestedCheckboxes, { TreeNode } from './NestedCheckboxes';

interface DropdownNestedCheckboxesProps {
  data: TreeNode[];
  onSelectionChange: (selectedItems: string[]) => void;
  value: string[];
  onBlur: () => void;
}

const DropdownNestedCheckboxes: React.FC<DropdownNestedCheckboxesProps> = ({
  data,
  onSelectionChange,
  value,
  onBlur,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelectionChange = (selection: string[]) => {
    onSelectionChange(selection);
  };

  return (
    <DropdownContainer ref={wrapperRef}>
      <DropdownHeader
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
        onBlur={onBlur}
      >
        Группы
        <ArrowIcon src="/public/assets/Header/icons/chevron-down.svg" alt="ArrowDownIcon" $isOpen={isOpen} />
      </DropdownHeader>
      {isOpen && (
        <DropdownContent>
          <NestedCheckboxes data={data} onSelectionChange={handleSelectionChange} value={value} />
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default DropdownNestedCheckboxes;

const ArrowIcon = styled.img<{ $isOpen: boolean; $customArrowIconStyles?: ReturnType<typeof css> }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.2s;

  ${({ $customArrowIconStyles }) => $customArrowIconStyles};
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownHeader = styled.div`
  user-select: none;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.coolGray10};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typography.bodyM}
  padding: 12px 16px 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray30};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.Primary60};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.Primary60};
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.coolGray30};
  background: ${({ theme }) => theme.colors.White};
  padding: 4px 0px 4px 0px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`;
