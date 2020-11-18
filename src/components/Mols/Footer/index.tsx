import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

import Separator from 'components/Atoms/Separator';

import { Container, ContentWrapper, Content } from './styles';

const Footer: React.FC = () => (
  <Container>
    <Separator type="horizontal" />
    <ContentWrapper>
      {/* https://github.com/thlindustries/kabum-challange */}
      <Content>
        <h3>Observações:</h3>
        <p>Feito com amor e carinho por Thiago Lorente Kraetzer</p>
        <a rel="noreferrer" target="_blank" href="https://github.com/thlindustries/kabum-challange ">
          Você pode encontrar o repositório deste projeto clicando aqui!
        </a>
      </Content>
      <Content>
        <h3>Onde você pode me encontrar:</h3>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/thiago-kraetzer/">
          <FaLinkedin size={18} color="#000" />
          {'     '}
          /thiago-kraetzer/
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/thlindustries">
          <FiGithub size={18} color="#000" />
          {'     '}
          /thlindustries
        </a>
      </Content>
    </ContentWrapper>
  </Container>
);

export default Footer;
