import { NavItem, Service, Technology, Transformation } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#about' },
  { label: 'Tratamentos', href: '#services' },
  { label: 'Tecnologia', href: '#technologies' },
  { label: 'Resultados', href: '#transformations' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Implantes Dentários',
    description: 'Recupere a função e a estética do seu sorriso com implantes de titânio de última geração, garantindo durabilidade e conforto.',
    image: '/implante.jpeg',
  },
  {
    id: '2',
    title: 'Lentes de Contato Dental',
    description: 'Facetas ultrafinas de porcelana que corrigem imperfeições, manchas e espaços, proporcionando um sorriso harmônico e brilhante.',
    image: '/lentes.png',
  },
  {
    id: '3',
    title: 'Ortodontia Invisível',
    description: 'Alinhadores transparentes que corrigem a posição dos dentes de forma discreta, confortável e mais rápida que os aparelhos tradicionais.',
    image: '/aparelho_invisivel.png',
  },
  {
    id: '4',
    title: 'Clareamento Dental',
    description: 'Técnicas avançadas de clareamento a laser ou caseiro supervisionado para devolver o branco natural dos seus dentes com segurança.',
    image: '/clareamento.jpg',
  },
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: '1',
    title: 'Escâner Intraoral 3D',
    description: 'Adeus às moldagens desconfortáveis. Mapeamos sua arcada dentária digitalmente com precisão milimétrica em segundos.',
    image: '/scaner.png',
  },
  {
    id: '2',
    title: 'Raio-X Digital Panorâmico',
    description: 'Diagnósticos precisos com menor exposição à radiação e visualização imediata da saúde óssea e dentária.',
    image: '/raiox.jpg',
  },
  {
    id: '3',
    title: 'Impressão 3D Odontológica',
    description: 'Produção rápida e precisa de próteses, guias cirúrgicos e modelos dentários, garantindo mais conforto e previsibilidade no tratamento.',
    image: '/impressao.png',
  },

];

// Simulação de Antes/Depois (Imagens ilustrativas)
export const TRANSFORMATIONS: Transformation[] = [
  { id: '1', after: '/dentes/img1.jpg', before: '/dentes/img2.jpg' },
  { id: '2', before: '/dentes/img3.jpg', after: '/dentes/img4.jpg' },
  { id: '3', after: '/dentes/img5.jpg', before: '/dentes/img6.jpg' },
  { id: '4', after: '/dentes/img7.jpg', before: '/dentes/img8.jpg' },
];
