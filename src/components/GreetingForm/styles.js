import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  .form-greetings {
    text-align: center;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }
  @media screen and (max-width: 1000px) {
    .form-greetings {
      padding: 0 30px;
    }
  }


  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    p {
      font-size: 14px;
    }
    
    .form-group input,
    .form-group textarea {
      font-size: 14px;
      padding: 8px;
    }
  }
  
`;
