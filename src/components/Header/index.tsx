import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const links = [
  {
    title: 'Listagem',
    url: '/',
  },
  {
    title: 'Importar',
    url: '/import',
  },
];

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {links.map(link => (
          <Link key={link.title} to={link.url}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  </Container>
);

export default Header;
