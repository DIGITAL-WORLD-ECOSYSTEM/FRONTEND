export type DocumentCategoryType =
  | 'institucional'
  | 'rwa'
  | 'governanca'
  | 'juridico'
  | 'parcerias';

export interface IDocumentCategory {
  id: DocumentCategoryType;
  title: string;
  icon: string;
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  description: string;
}

export interface IDocumentConfig {
  slug: string;
  title: string;
  category: DocumentCategoryType;
  description: string;
  size: string;
  type: 'model' | 'sign' | 'pdf';
  icon: string;
  isReady: boolean;
  readyUrl?: string;
  code?: string;
}

export const DOCUMENT_CATEGORIES: IDocumentCategory[] = [
  {
    id: 'institucional',
    title: 'Institucional & Estatuto',
    icon: 'solar:buildings-3-bold',
    color: 'primary',
    description: 'Atos constitutivos, estatuto social, regimento interno e manifestos magnos da ASPPIBRA.',
  },
  {
    id: 'rwa',
    title: 'RWA & Imobiliário / Posse',
    icon: 'solar:leaf-bold',
    color: 'success',
    description: 'Instrumentos contratuais de posse, laudos agronômicos e diretrizes de tokenização de terras.',
  },
  {
    id: 'governanca',
    title: 'Governança Web3 & Tesouro',
    icon: 'solar:shield-check-bold',
    color: 'info',
    description: 'Protocolos de votação on-chain (PIP), quórum, custódia do tesouro e auditorias de smart contracts.',
  },
  {
    id: 'juridico',
    title: 'Jurídico, Compliance & LGPD',
    icon: 'solar:scale-bold',
    color: 'warning',
    description: 'Termos de uso, políticas de proteção de dados, arbitragem e conformidade regulatória.',
  },
  {
    id: 'parcerias',
    title: 'Produtores & Adesão',
    icon: 'solar:handshake-bold',
    color: 'secondary',
    description: 'Termos de filiação de produtores rurais, acordos de integração tecnológica e parcerias.',
  },
];

export const DOCUMENTS: IDocumentConfig[] = [
  // 🏛️ 1. Institucional & Estatuto
  {
    slug: 'estatuto-social-2025',
    title: 'Estatuto Social 2025 da ASPPIBRA',
    category: 'institucional',
    code: 'EST-2025-01',
    description: 'Estatuto oficial consolidado regulamentando a estrutura jurídica, direitos e deveres dos associados.',
    size: 'Oficial ABNT',
    type: 'pdf',
    icon: 'solar:book-bookmark-bold',
    isReady: true,
    readyUrl: '/documentos/estatuto-social-2025',
  },
  {
    slug: 'constituicao-plataforma-dao',
    title: 'Constituição da Plataforma ASPPIBRA-DAO',
    category: 'institucional',
    code: 'CONST-DAO-01',
    description: 'Princípios fundamentais, governança digital distribuída e direitos dos cidadãos no ecossistema Web3.',
    size: 'Norma Magna',
    type: 'model',
    icon: 'solar:shield-minimalistic-bold',
    isReady: true,
    readyUrl: '/documentos/constituicao-plataforma-dao',
  },
  {
    slug: 'regimento-interno',
    title: 'Regimento Interno e Conselho Deliberativo',
    category: 'institucional',
    code: 'REG-INT-02',
    description: 'Regulamento das comissões temáticas, funcionamento do conselho diretor e código eleitoral interno.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:document-text-bold',
    isReady: false,
  },
  {
    slug: 'whitepaper-rwa-defi',
    title: 'Whitepaper Oficial ASPPIBRA-DAO (RWA & DeFi)',
    category: 'institucional',
    code: 'WP-RWA-2026',
    description: 'Arquitetura técnica, modelo econômico do token, oráculos, IPFS e tokenização do agronegócio.',
    size: 'Técnico 42 pág.',
    type: 'pdf',
    icon: 'solar:star-bold',
    isReady: true,
    readyUrl: '/whitepaper',
  },

  // 🌾 2. RWA & Imobiliário / Posse
  {
    slug: 'cessao-de-posse',
    title: 'Instrumento Particular de Cessão de Posse',
    category: 'rwa',
    code: 'CONTR-POSSE-17',
    description: 'Minuta jurídica completa em 17 capítulos com qualificação, declaração possessória e assinaturas digitais.',
    size: '17 Capítulos',
    type: 'sign',
    icon: 'solar:diploma-verified-bold',
    isReady: true,
    readyUrl: '/documentos/cessao-de-posse',
  },
  {
    slug: 'manual-tokenizacao-rwa',
    title: 'Manual de Tokenização de Ativos Reais (RWA)',
    category: 'rwa',
    code: 'MAN-RWA-01',
    description: 'Metodologia de conversão de direitos possessórios e safras em frações digitais criptografadas.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:cpu-bolt-bold',
    isReady: false,
  },
  {
    slug: 'laudo-vistoria-agronomica',
    title: 'Laudo Técnico de Vistoria e Avaliação Agronômica',
    category: 'rwa',
    code: 'LAUD-AGRO-03',
    description: 'Padrão pericial de vistoria geográfica, CAR, análise de solo, reserva legal e capacidade produtiva.',
    size: 'Laudo Pericial',
    type: 'model',
    icon: 'solar:clipboard-check-bold',
    isReady: false,
  },
  {
    slug: 'termo-rastreabilidade-safra',
    title: 'Termo de Origem e Rastreabilidade Agrícola',
    category: 'rwa',
    code: 'RASTR-AGRO-01',
    description: 'Protocolo de certificação agroecológica e registro de procedência sustentável no storage descentralizado.',
    size: 'Certificado',
    type: 'model',
    icon: 'solar:tag-bold',
    isReady: false,
  },

  // ⛓️ 3. Governança Web3 & Tesouro
  {
    slug: 'politica-propostas-pip',
    title: 'Política de Propostas de Melhoria (PIP)',
    category: 'governanca',
    code: 'PIP-GOV-01',
    description: 'Regras formais de submissão de propostas, período de discussão, quórum mínimo e execução on-chain.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:chat-round-check-bold',
    isReady: false,
  },
  {
    slug: 'manual-tesouro-multisig',
    title: 'Manual de Custódia e Gestão de Tesouro DAO',
    category: 'governanca',
    code: 'TES-DAO-01',
    description: 'Normas de governança de reservas financeiras, cofres multisig, dotações orçamentárias e transparência.',
    size: 'Financeiro',
    type: 'model',
    icon: 'solar:wallet-money-bold',
    isReady: false,
  },
  {
    slug: 'seguranca-smart-contracts',
    title: 'Diretrizes de Auditoria de Smart Contracts',
    category: 'governanca',
    code: 'AUDIT-SEC-01',
    description: 'Padrões de segurança para contratos inteligentes BEP-20, cofre de trava de liquidez e verificação estática.',
    size: 'Segurança',
    type: 'model',
    icon: 'solar:lock-keyhole-minimalistic-bold',
    isReady: false,
  },

  // ⚖️ 4. Jurídico, Compliance & LGPD
  {
    slug: 'privacidade-lgpd',
    title: 'Política de Privacidade e Proteção de Dados (LGPD)',
    category: 'juridico',
    code: 'POL-LGPD-01',
    description: 'Conformidade integral com a Lei 13.709/2018 para coleta, tratamento e anonimização de dados pessoais.',
    size: 'Compliance',
    type: 'pdf',
    icon: 'solar:shield-warning-bold',
    isReady: true,
    readyUrl: '/privacy',
  },
  {
    slug: 'termos-de-uso',
    title: 'Termos e Condições Gerais de Uso da Plataforma',
    category: 'juridico',
    code: 'TER-USO-01',
    description: 'Contrato de adesão do usuário, responsabilidades das carteiras não-custodiais e uso do ecossistema.',
    size: 'Contrato Padrão',
    type: 'pdf',
    icon: 'solar:file-check-bold',
    isReady: true,
    readyUrl: '/terms',
  },
  {
    slug: 'compromisso-arbitral',
    title: 'Compromisso Arbitral e Resolução de Conflitos',
    category: 'juridico',
    code: 'ARB-LEG-01',
    description: 'Cláusula compromissória estabelecendo arbitragem extrajudicial especializada para controvérsias contratuais.',
    size: 'Jurídico',
    type: 'model',
    icon: 'solar:gavel-bold',
    isReady: false,
  },
  {
    slug: 'codigo-de-etica',
    title: 'Código de Ética, Integridade e Transparência',
    category: 'juridico',
    code: 'COD-ETICA-01',
    description: 'Padrões éticos, política anticorrupção e canal confidencial de integridade para a comunidade ASPPIBRA.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:medal-star-bold',
    isReady: false,
  },

  // 🤝 5. Produtores & Adesão
  {
    slug: 'termo-adesao-produtor',
    title: 'Termo de Adesão de Produtor Rural Associado',
    category: 'parcerias',
    code: 'ADES-PROD-01',
    description: 'Formulário e termo formal de qualificação do pequeno e médio produtor ao ecossistema da ASPPIBRA.',
    size: 'Termo de Adesão',
    type: 'sign',
    icon: 'solar:user-check-bold',
    isReady: false,
  },
  {
    slug: 'parceria-tecnologica-apis',
    title: 'Contrato de Parceria Tecnológica e Integração',
    category: 'parcerias',
    code: 'PARC-TEC-01',
    description: 'Termo de integração com nós de infraestrutura, gateways de pagamento Web3 e oráculos descentralizados.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:link-circle-bold',
    isReady: false,
  },
  {
    slug: 'termo-voluntariado-agro',
    title: 'Termo de Voluntariado e Fomento Agroecológico',
    category: 'parcerias',
    code: 'VOL-AGRO-01',
    description: 'Instrumento de adesão ao trabalho voluntário conforme Lei 9.608/1998 para apoio à agricultura regenerativa.',
    size: 'Voluntariado',
    type: 'model',
    icon: 'solar:heart-angle-bold',
    isReady: false,
  },
];
