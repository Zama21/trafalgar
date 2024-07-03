import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../Typography';

interface LocationProps {
  location: string;
}

const Location: React.FC<LocationProps> = ({ location }) => {
  return (
    <HeaderCitySelector>
      <img src="/public/assets/Header/icons/map-marker.svg" alt="CityIcon" />
      <Typography variant="menuTabs">{location}</Typography>
    </HeaderCitySelector>
  );
};

export default Location;

const HeaderCitySelector = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 8px 12px 8px;
  gap: 8px;
`;
