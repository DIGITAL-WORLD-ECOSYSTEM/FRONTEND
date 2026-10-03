import type { Metadata } from 'next';

import { DocumentosView } from 'src/sections/documentos/_view';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Portal de Documentos Oficiais | ASPPIBRA DAO',
  description:
    'Acesso centralizado e auditável a todos os instrumentos jurídicos, estatutos sociais, contratos de cessão de posse e governança da ASPPIBRA.',
  keywords: [
    'Documentos ASPPIBRA',
    'Cessão de Posse',
    'Estatuto Social',
    'Governança DAO',
    'RWA',
    'Contratos Inteligentes',
    'Assinatura Digital ABNT',
  ],
};

export default function DocumentosPage() {
  return <DocumentosView />;
}
