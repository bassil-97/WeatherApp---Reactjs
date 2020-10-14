import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
  }
  
  .item {
    height: 150px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border-radius: 10px;
    text-align: center;
    -webkit-box-shadow: ${({ theme }) => theme.webkitBoxShadow};
        box-shadow: ${({ theme }) => theme.boxShadow};
    background: ${({ theme }) => theme.component};
    transition: all 0.50s linear;
  }

  .item span {
    font-weight: 700;
    color: #95A5A6;
  }

  .divider {
    height: 1px;
    background-color: #D0D3D4;
    width: 100%;
  }

  .item h4 {
    font-size: 18px;
    font-weight: 600;
  }

  .item h1 {
    font-size: 50px;
  }

  .box {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    -webkit-box-shadow: ${({ theme }) => theme.webkitBoxShadow};
        box-shadow: ${({ theme }) => theme.boxShadow};
    background: ${({ theme }) => theme.boxBackground};
    transition: all 0.50s linear;
  }

  .box h5 {
    width: 80%;
  }

  .result-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .formContainer {
    width: 80%;
    padding: 36px;
    margin-top: 100px;
    background-color: #F7F9F9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.formContainer};
    transition: all 0.50s linear;
  }

  .formContainer form #cityName {
    background: none;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid lightgray;
  }

  .formContainer #emailHelp {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .Form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .Form * {
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .container {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  #result-wrapper {
    padding: 40px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
  }

  #result-wrapper .row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 992px) {
    #result-wrapper .row .col-lg-4 {
      margin-bottom: 14px;
    }
  }

  `;

