import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        powderWhite: '#FFFDF9',
        persianGreen: '#06B49A',
        lightBlue: '#AFDBD2',
        onyx: '#36313D',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
};
type Props = {
  children: React.ReactNode;
}

// eslint-disable-next-line max-len
const Theme: FC<Props> = (props: Props): ReactElement => {
    const { children } = props;
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export default Theme;
