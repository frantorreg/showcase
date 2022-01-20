export const buildMiddleMargins = (vertical = 0, horizontal = 0) => `
  margin: ${vertical} ${horizontal};

  &:first-child {
    ${vertical && 'margin-top: 0;'}
    ${horizontal && 'margin-left: 0;'}
  }

  &:last-child {
    ${vertical && 'margin-bottom: 0;'}
    ${horizontal && 'margin-right: 0;'}
  }
`;
