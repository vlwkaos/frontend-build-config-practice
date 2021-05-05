import * as React from 'react';
import styled from 'styled-components';
import Theme from '../theme/theme';

const Title = styled.h1.attrs({
    className: 'i',
})`
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const App: React.FC = (): React.ReactElement => <div><Theme><Title>App Header</Title></Theme></div>;

export default App;
