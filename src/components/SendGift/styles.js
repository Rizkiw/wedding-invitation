import { css } from '@emotion/core';

export const styWrapper = css`
  h4 {
    font-size: 16px;
    margin-top: 16px;
    font-weight: bold;
    color: #828282;
    letter-spacing: 0.5px;
  }
  

  @media screen and (max-width: 500px) {
    .bank-info {
        display:flex;
        flex-direction: column;
    }
    h4 {
      font-size: 16px;
    }
    .info {
      margin: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    .bank-info {
        display:flex;
        flex-direction: column;
    }
    h4 {
      font-size: 14px;
    }
  }
`;
