import styled from "styled-components";

const InputLayout = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #44403c;
  border: none;
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputLayout
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
