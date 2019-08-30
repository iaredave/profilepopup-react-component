import styled from "styled-components";

export const Popup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 30px;
  background-color: #dddddd;
  border-radius: 7px 7px 0px 0px;
  width: 200px;
  height: 230px;
`;

export const Banner = styled.div`
  background-color: #dddddd;
  border-radius: 7px 7px 0 0;
`;

export const Profile = styled.div`
  margin-right: 4px;
`;

export const Username = styled.div`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const ButtonEditProfile = styled.div`
    margin-right: 40px;
`;
