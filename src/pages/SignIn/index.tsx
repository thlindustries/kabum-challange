import Axios from 'axios';
import React, { useEffect } from 'react';

import { Container } from './styles';

const SignIn: React.FC = () => {
  useEffect(() => {
    Axios.get('http://localhost:8080/user').then((response) => console.log(response.data))
  }, []);

  return (
    <Container>Pagina SignIn</Container>
  )
};

export default SignIn;
