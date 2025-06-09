import { css } from '@emotion/core';

export const styWrapper = css`
  .info {
    font-style: italic;
  }

  .sub-title {
    color:rgb(53, 53, 53);
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  .container {
    z-index: 1;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
    color:rgb(100, 99, 99);
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

@media screen and (max-width: 450px) {
  p {
    font-size: 14px;
  }
}
`;
