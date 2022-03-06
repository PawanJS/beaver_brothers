import styled from 'styled-components';

export const FormBlock = styled.div`
  position: relative;
  top: -140px;
  max-width: 620px;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  background-color: #fff;
  box-shadow: 65px 65px 132px -24px hsla(0, 0%, 62%, 0.16);
`;

export const FormWrapper = styled.div`
  margin: 0 0 15px;
`;

export const Input = styled.input`
  min-height: 56px;
  margin-bottom: 16px;
  padding-left: 52px;
  border: 1px solid #dde3e4;
  color: #485b60;
  font-size: 16px;
  line-height: 24px;
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  vertical-align: middle;
  background-color: #ffffff;
  font: inherit;

  :hover {
    border-color: #b4bbbd;
  }

  :focus {
    border-color: #26534c;
    outline: 0;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  vertical-align: middle;
  background-color: #ffffff;
  min-height: 148px;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #dde3e4;
  color: #485b60;
  font-size: 16px;
  line-height: 24px;
  font: inherit;

  :hover {
    border-color: #b4bbbd;
  }

  :focus {
    border-color: #26534c;
    outline: 0;
  }
`;

export const FormButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  min-height: 48px;
  padding: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #eff1f5;
  background-color: #26534c;
  transition: background-color 300ms ease;
  font-family: Inter, sans-serif;
  color: #fff;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border-radius: 0;
  font: inherit;

  :hover {
    background-color: #1c3f3a;
  }
`;

export const FormSuccessMessage = styled.div`
  background-color: #53847d;
  color: #fff;
  display: none;
  padding: 20px;
  text-align: center;
`;

export const FormFailureMessage = styled.div`
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
`;
