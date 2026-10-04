export type DocumentCategoryType =
  | 'institucional'
  | 'governanca'
  | 'juridico';

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
    title: 'Institucional',
    icon: 'solar:buildings-3-bold',
    color: 'primary',
    description: 'Atos constitutivos, estatuto social, regimento interno e governança da ASPPIBRA.',
  },
  {
    id: 'governanca',
    title: 'Governança',
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
];

export const DOCUMENTS: IDocumentConfig[] = [
  // 🏛️ 1. Institucional
  {
    slug: 'estatuto-social',
    title: 'Estatuto Social',
    category: 'institucional',
    code: 'EST-SOC-01',
    description: 'Estatuto oficial consolidado regulamentando a estrutura jurídica, direitos e deveres dos associados.',
    size: 'Oficial ABNT',
    type: 'pdf',
    icon: 'solar:book-bookmark-bold',
    isReady: true,
    readyUrl: '/documentos/estatuto-social',
  },
  {
    slug: 'regimento-interno',
    title: 'Regimento Interno',
    category: 'institucional',
    code: 'REG-INT-01',
    description: 'Regulamento das comissões temáticas, funcionamento do conselho diretor e código eleitoral interno.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:document-text-bold',
    isReady: false,
  },

  // ⛓️ 2. Governança
  {
    slug: 'politica-propostas-pip',
    title: 'Propostas de Melhoria',
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
    title: 'Auditoria de Smart',
    category: 'governanca',
    code: 'AUDIT-SEC-01',
    description: 'Padrões de segurança para contratos inteligentes BEP-20, cofre de trava de liquidez e verificação estática.',
    size: 'Segurança',
    type: 'model',
    icon: 'solar:lock-keyhole-minimalistic-bold',
    isReady: false,
  },

  // ⚖️ 3. Jurídico, Compliance & LGPD
  {
    slug: 'privacidade-lgpd',
    title: 'Política de Privacidade e Proteção de Dados',
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
    title: 'Termos e Condições Gerais',
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
    title: 'Resolução de Conflitos',
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
    title: 'Código de Ética',
    category: 'juridico',
    code: 'COD-ETICA-01',
    description: 'Padrões éticos, política anticorrupção e canal confidencial de integridade para a comunidade ASPPIBRA.',
    size: 'Em Revisão',
    type: 'model',
    icon: 'solar:medal-star-bold',
    isReady: false,
  },
];
