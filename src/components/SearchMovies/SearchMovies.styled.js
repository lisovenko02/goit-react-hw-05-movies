import styled from 'styled-components';
import { Form , Field } from "formik";

export const SearchForm = styled(Form)`
    width: 400px;
    display: flex;
    padding-top:15px;


    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const BtnFormik = styled.button`
width: auto;
  height: 36px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: white;
  border: 2px solid white;
  background-color: black;
  border-radius: 4px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 2px 2px 2px #31463c6e;
  }
`;

export const InputField = styled(Field)`
  width: 100%;
  height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  border: 2px solid white;

  border-radius: 5px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;