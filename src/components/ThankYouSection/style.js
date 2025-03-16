import { css } from '@emotion/core';

export const styWrapper = css`
  p {
    font-size: 16px;
    margin-top: 16px;
  }
  

  @media screen and (max-width: 500px) {
    p {
      font-size: 16px;
    }
    .info {
      margin: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
