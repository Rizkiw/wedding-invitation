import { css } from '@emotion/core';

export const styWrapper = css`
  .rose-top-left {
    top: -100px;
    width: 400px;
  }
  .leaf-top-right {
    top: 10px;
  }
  .rose-bottom-right {
    top: 400px;
    width: 400px;
  }

  @media screen and (max-width: 500px) {
    .rose-top-left {
      top: -200px;
      width: 200px;
    }

    .leaf-top-right {
      top: 400px;
    }

    .rose-bottom-right {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    .rose-top-left,
    .leaf-top-right,
    .rose-bottom-right {
      display: none;
    }
  }
`;
