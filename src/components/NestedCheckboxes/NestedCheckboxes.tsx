import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface TreeNode {
  label: string;
  value: string;
  children?: TreeNode[];
}

interface NestedCheckboxesProps {
  data: TreeNode[];
  onSelectionChange: (selectedItems: string[]) => void;
  value: string[];
}

const NestedCheckboxes: React.FC<NestedCheckboxesProps> = ({ data, onSelectionChange, value }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [parentMap, setParentMap] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const initialCheckedState: { [key: string]: boolean } = {};
    const parentMapping: { [key: string]: string } = {};

    const addNodes = (nodes: TreeNode[], parentValue: string | null = null) => {
      nodes.forEach((node) => {
        if (value) {
          initialCheckedState[node.value] = value.includes(node.value) || false;
        } else initialCheckedState[node.value] = false;

        if (parentValue) {
          parentMapping[node.value] = parentValue;
        }
        if (node.children) {
          addNodes(node.children, node.value);
        }
      });
    };

    addNodes(data);
    setCheckedItems(initialCheckedState);
    setParentMap(parentMapping);
  }, [data]);

  const findNode = (nodes: TreeNode[], value: string): TreeNode | undefined => {
    for (const node of nodes) {
      if (node.value === value) return node;

      if (node.children) {
        const found = findNode(node.children, value);
        if (found) return found;
      }
    }
  };

  const updateParentChecks = (value: string, newCheckedItems: { [key: string]: boolean }) => {
    const parentValue = parentMap[value];
    if (parentValue) {
      const parentNode = findNode(data, parentValue);
      if (parentNode) {
        const allChildrenChecked = parentNode.children!.every((child) => newCheckedItems[child.value]);
        newCheckedItems[parentValue] = allChildrenChecked;

        updateParentChecks(parentValue, newCheckedItems);
      }
    }
  };

  const handleCheck = (value: string, checked: boolean) => {
    const newCheckedItems = { ...checkedItems };

    const checkChildren = (value: string, checked: boolean) => {
      newCheckedItems[value] = checked;
      const node = findNode(data, value);
      if (node?.children) {
        node.children.forEach((child) => checkChildren(child.value, checked));
      }
    };

    checkChildren(value, checked);
    updateParentChecks(value, newCheckedItems);

    setCheckedItems(newCheckedItems);
    onSelectionChange(Object.keys(newCheckedItems).filter((key) => newCheckedItems[key]));
  };

  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => (
      <TreeItem key={node.value}>
        <CheckboxLabel
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCheck(node.value, !checkedItems[node.value]);
            }
          }}
        >
          <StyledInput
            type="checkbox"
            checked={checkedItems[node.value] || false}
            onChange={() => handleCheck(node.value, !checkedItems[node.value])}
            tabIndex={-1}
          />
          {node.label}
        </CheckboxLabel>
        {node.children && <ChildrenContainer>{renderTree(node.children)}</ChildrenContainer>}
      </TreeItem>
    ));
  };

  const toggleAllCheckboxes = () => {
    const allChecked = Object.values(checkedItems).every(Boolean);
    const newCheckedItems = Object.keys(checkedItems).reduce<{ [key: string]: boolean }>((acc, key) => {
      acc[key] = !allChecked;
      return acc;
    }, {});
    onSelectionChange(Object.keys(newCheckedItems).filter((key) => newCheckedItems[key]));
    setCheckedItems(newCheckedItems);
  };

  return (
    <CheckboxList>
      <CheckboxLabel
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleAllCheckboxes();
          }
        }}
      >
        <StyledInput
          type="checkbox"
          checked={Object.values(checkedItems).every(Boolean)}
          onChange={toggleAllCheckboxes}
          tabIndex={-1}
        />
        Выбрать все
      </CheckboxLabel>

      {renderTree(data)}
    </CheckboxList>
  );
};

export default NestedCheckboxes;

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.typography.bodyS}
`;

const TreeItem = styled.div`
  margin-left: 20px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3px;
  gap: 3px;
  user-select: none;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.Primary60};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.Primary60};
  }
`;

const StyledInput = styled.input`
  min-width: 0;
  width: 20px;
  height: 20px;
  margin: 9px;
`;

const ChildrenContainer = styled.div`
  margin-left: 20px;
`;
