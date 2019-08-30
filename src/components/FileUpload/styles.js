import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Dropbox = styled.div`
  position: absolute;
  width: 92px;
  height: 92px;
  z-index: 2;
  border-color: #FFFFFF;
  border-style: solid;
  border-radius: 50%;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  &:hover {
    border-color: #2196f3;
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const Preview = styled.div`
  display: inline-block;
  position: relative;
  width: 96px;
  height: 96px;
  overflow: hidden;
  border-radius: 50%;
`;
