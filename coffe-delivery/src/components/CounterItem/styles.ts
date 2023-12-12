import styled from "styled-components";

export const CounterContainer = styled.div`
  background: ${({theme}) => theme.colors["base-button"]};
  display: flex;
  align-items:  center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.5rem;

  padding: 0.5rem;

  color: ${({theme}) => theme.colors["brand-purple"]};

  span{
    color: ${({theme}) => theme.colors["base-title"]} ;
    size: ${({theme}) => theme.textSizes["text-regular-m"]};
  }
`