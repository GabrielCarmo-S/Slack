import React from 'react';
import styled from 'styled-components';

function SidebarOption({ Icon, title }) {
  return (
    <SidenarOptionContainer>
      {Icon && <Icon fontsize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidenarOptionContainer>
  );
}

export default SidebarOption;

const SidenarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340c36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
    
  }
`;

const SidebarOptionChannel = styled.div``;