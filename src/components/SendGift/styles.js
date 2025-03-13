import { css } from '@emotion/core';

export const styWrapper = css`
  p {
    font-size: 16px;
    margin-top: 16px;
  }
  
  .info {
    margin: 15px;
  }

  @media screen and (max-width: 500px) {
    .bank-info {
        display:flex;
        flex-direction: column;
    }
    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    .bank-info {
        display:flex;
        flex-direction: column;
    }
    p {
      font-size: 14px;
    }
  }
`;
