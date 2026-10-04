import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { constructMetadata } from 'src/lib/seo/metadata';
import { HomeFAQs } from 'src/sections/home/_components/HomeFaqs';

// ----------------------------------------------------------------------

export const metadata = constructMetadata({
  title: 'Perguntas Frequentes (FAQ) | ASPPIBRA DAO',
  description:
    'Encontre respostas sobre governança descentralizada, tokenização de ativos reais (RWA), segurança jurídica e participação na ASPPIBRA DAO.',
});

export default function FaqsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Como posso obter atualizações sobre o projeto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atualizações sobre governança da DAO e tokenização RWA são publicadas em nossos canais oficiais no Discord e Telegram.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual o papel da ASPPIBRA-DAO na agroecologia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atuamos na digitalização de processos e rastreabilidade para produtores rurais, como cadeias de café agroecológico em Paraty, promovendo transparência e valorização do produto.',
        },
      },
      {
        '@type': 'Question',
        name: 'O projeto possui conformidade jurídica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim. A Fase 01 do roadmap estabelece a estrutura jurídica e o compliance institucional para garantir segurança regulatória e operacional.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona a segurança dos ativos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A segurança é baseada em contratos inteligentes auditáveis, garantindo imutabilidade, transparência e soberania das transações de ativos tokenizados.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Box sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 12 }, minHeight: '80vh' }}>
        <Container maxWidth="lg">
          <HomeFAQs sx={{ py: { xs: 4, md: 6 } }} />
        </Container>
      </Box>
    </>
  );
}
