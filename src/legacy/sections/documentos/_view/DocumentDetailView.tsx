'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';
import { HomeBackground } from 'src/components/background';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import type { ILegalDocumentFull } from 'src/legacy/data/documents/types';

// ----------------------------------------------------------------------

type Props = {
  document: ILegalDocumentFull;
};

export function DocumentDetailView({ document }: Props) {
  const theme = useTheme();
  const router = useRouter();

  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState<string>(
    document.chapters[0]?.id || ''
  );

  const handleCopyHash = () => {
    if (document.sha256) {
      navigator.clipboard.writeText(document.sha256);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 3000);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const scrollToChapter = (id: string) => {
    setActiveChapterId(id);
    const element = typeof window !== 'undefined' ? window.document.getElementById(id) : null;
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 🌌 Atmosfera Web3 (oculta 100% na impressão) */}
      <Box className="no-print" sx={{ '@media print': { display: 'none !important' } }}>
        <HomeBackground />
      </Box>

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 12, md: 16 },
          pb: { xs: 12, md: 16 },
          '@media print': {
            pt: '0 !important',
            pb: '0 !important',
            bgcolor: '#ffffff !important',
            color: '#000000 !important',
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            '@media print': {
              maxWidth: '100% !important',
              p: '0 !important',
              m: '0 !important',
            },
          }}
        >
          {/* 🧭 Breadcrumbs e Voltar (Oculto no Print) */}
          <Box
            className="no-print"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
              mb: 4,
              '@media print': { display: 'none !important' },
            }}
          >
            <Breadcrumbs
              separator={<Iconify icon={"solar:alt-arrow-right-linear" as any} width={14} sx={{ color: 'rgba(255,255,255,0.4)' }} />}
              sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}
            >
              <Link
                underline="hover"
                color="inherit"
                onClick={() => router.push('/')}
                sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                <Iconify icon={"solar:home-2-linear" as any} width={16} /> Início
              </Link>
              <Link
                underline="hover"
                color="inherit"
                onClick={() => router.push('/documentos')}
                sx={{ cursor: 'pointer' }}
              >
                Documentos
              </Link>
              <Typography sx={{ color: '#00ff7f', fontWeight: 600 }}>
                {document.title}
              </Typography>
            </Breadcrumbs>

            <CyberButton
              variant="outlined"
              onClick={() => router.push('/documentos')}
              startIcon={<Iconify icon={"solar:arrow-left-linear" as any} width={18} />}
              sx={{ height: 36, fontSize: '0.75rem', px: 2 }}
            >
              VOLTAR AO PORTAL
            </CyberButton>
          </Box>

          {/* 🏛️ Timbre Institucional Oficial da República Federativa do Brasil / ASPPIBRA (Apenas Impressão A4) */}
          <Box
            className="print-only"
            sx={{
              display: 'none',
              '@media print': {
                display: 'block !important',
                textAlign: 'center',
                borderBottom: '1.5pt solid #000000',
                pb: '10pt',
                mb: '16pt',
                breakInside: 'avoid !important',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '13pt !important',
                fontWeight: '900 !important',
                textTransform: 'uppercase',
                color: '#000000 !important',
                WebkitTextFillColor: '#000000 !important',
                fontFamily: '"Public Sans", Arial, sans-serif !important',
                letterSpacing: '1pt',
                lineHeight: 1.2,
                mb: '3pt !important',
              }}
            >
              {document.organization}
            </Typography>
            <Typography
              sx={{
                fontSize: '9.5pt !important',
                fontWeight: '700 !important',
                color: '#222222 !important',
                WebkitTextFillColor: '#222222 !important',
                fontFamily: '"Public Sans", Arial, sans-serif !important',
                mb: '2pt !important',
              }}
            >
              {document.digitalName} • GOVERNANÇA INSTITUCIONAL & REGISTRO PÚBLICO
            </Typography>
            <Typography
              sx={{
                fontSize: '8.5pt !important',
                color: '#444444 !important',
                WebkitTextFillColor: '#444444 !important',
                fontFamily: '"Public Sans", Arial, sans-serif !important',
              }}
            >
              Registro Civil de Pessoas Jurídicas (RCPJ) | Sede e Foro: {document.jurisdiction}
            </Typography>
          </Box>

          {/* 📄 Cabeçalho Oficial do Documento */}
          <CyberCard
            sx={{
              p: { xs: 3, md: 4.5 },
              mb: 4,
              border: '1px solid rgba(0, 255, 127, 0.25)',
              position: 'relative',
              overflow: 'hidden',
              '@media print': {
                border: '2px solid #000 !important',
                borderRadius: '0 !important',
                boxShadow: 'none !important',
                p: '16pt !important',
                mb: '20pt !important',
                bgcolor: '#ffffff !important',
                color: '#000000 !important',
                breakInside: 'avoid !important',
                pageBreakInside: 'avoid !important',
              },
            }}
          >
            {/* Badges Superiores */}
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', flexWrap: 'wrap', mb: 2 }}>
              <Chip
                label={document.code}
                sx={{
                  bgcolor: 'rgba(0, 255, 127, 0.15)',
                  color: '#00ff7f',
                  border: '1px solid rgba(0, 255, 127, 0.3)',
                  fontWeight: 800,
                  fontSize: 11,
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  '@media print': {
                    bgcolor: 'transparent !important',
                    color: '#000 !important',
                    border: '1px solid #000 !important',
                    fontWeight: 'bold !important',
                    fontFamily: '"Public Sans", Arial, sans-serif !important',
                  },
                }}
              />
              <Chip
                icon={<Iconify icon={"solar:verified-check-bold" as any} width={16} sx={{ color: '#00d2ff !important', '@media print': { display: 'none !important' } }} />}
                label="OFICIAL CONSOLIDADO"
                sx={{
                  bgcolor: 'rgba(0, 210, 255, 0.12)',
                  color: '#00d2ff',
                  fontWeight: 700,
                  fontSize: 11,
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  '@media print': {
                    bgcolor: 'transparent !important',
                    color: '#000 !important',
                    border: '1px solid #000 !important',
                    fontWeight: 'bold !important',
                    fontFamily: '"Public Sans", Arial, sans-serif !important',
                  },
                }}
              />
              <Chip
                label={`Vigência: ${document.effectiveDate}`}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 600,
                  fontSize: 11,
                  '@media print': {
                    bgcolor: 'transparent !important',
                    color: '#000 !important',
                    border: '1px solid #000 !important',
                    fontWeight: 'bold !important',
                  },
                }}
              />
            </Stack>

            {/* Título Principal */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                color: '#fff',
                fontSize: { xs: '1.8rem', md: '2.4rem' },
                mb: 1.5,
                '@media print': {
                  color: '#000000 !important',
                  WebkitTextFillColor: '#000000 !important',
                  fontSize: '22pt !important',
                  fontFamily: '"Public Sans", Arial, sans-serif !important',
                  fontWeight: '900 !important',
                  letterSpacing: '0.5pt !important',
                  mb: '8pt !important',
                },
              }}
            >
              {document.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
                lineHeight: 1.5,
                mb: 2,
                '@media print': {
                  color: '#000000 !important',
                  fontSize: '12pt !important',
                  fontWeight: 'bold !important',
                  mb: '6pt !important',
                },
              }}
            >
              {document.organization} {document.digitalName && `(${document.digitalName})`}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 13,
                '@media print': {
                  color: '#333333 !important',
                  fontSize: '10pt !important',
                  lineHeight: '1.4 !important',
                },
              }}
            >
              Foro & Comarca: <strong>{document.jurisdiction}</strong> • Data da Assembleia: <strong>{document.approvalDate}</strong>
            </Typography>

            {/* 🛠️ Barra de Ações (Oculta 100% na impressão) */}
            <Box
              className="no-print"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.5,
                mt: 3.5,
                pt: 3,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                '@media print': { display: 'none !important' },
              }}
            >
              <CyberButton
                glowColor="primary"
                onClick={handlePrint}
                startIcon={<Iconify icon={"solar:printer-bold" as any} width={18} />}
                sx={{ height: 40, fontSize: '0.8rem', px: 2.5 }}
              >
                IMPRIMIR / SALVAR PDF A4
              </CyberButton>

              <CyberButton
                variant="outlined"
                onClick={handleCopyLink}
                startIcon={
                  <Iconify
                    icon={(copiedLink ? "solar:check-circle-bold" : "solar:link-bold") as any}
                    width={18}
                    sx={{ color: copiedLink ? '#00ff7f' : 'inherit' }}
                  />
                }
                sx={{ height: 40, fontSize: '0.8rem', px: 2 }}
              >
                {copiedLink ? 'LINK COPIADO!' : 'COPIAR LINK'}
              </CyberButton>

              {document.sha256 && (
                <CyberButton
                  variant="outlined"
                  onClick={handleCopyHash}
                  startIcon={
                    <Iconify
                      icon={(copiedHash ? "solar:check-circle-bold" : "solar:shield-check-bold") as any}
                      width={18}
                      sx={{ color: copiedHash ? '#00ff7f' : 'inherit' }}
                    />
                  }
                  sx={{ height: 40, fontSize: '0.8rem', px: 2 }}
                >
                  {copiedHash ? 'HASH SHA-256 COPIADO!' : 'HASH DE AUTENTICIDADE'}
                </CyberButton>
              )}
            </Box>
          </CyberCard>

          {/* 🏛️ Painel de Fé Pública: Consulta de Selos Extrajudiciais */}
          {document.cartorioSeals && document.cartorioSeals.length > 0 && (
            <CyberCard
              sx={{
                p: 3,
                mb: 5,
                bgcolor: 'rgba(2, 8, 23, 0.75)',
                border: '1px solid rgba(0, 210, 255, 0.25)',
                '@media print': {
                  bgcolor: '#ffffff !important',
                  border: '1px solid #000000 !important',
                  borderRadius: '0 !important',
                  boxShadow: 'none !important',
                  p: '12pt !important',
                  mb: '18pt !important',
                  breakInside: 'avoid !important',
                  pageBreakInside: 'avoid !important',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Iconify icon={"solar:diploma-verified-bold" as any} width={22} sx={{ color: '#00d2ff', '@media print': { color: '#000 !important' } }} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: 1,
                    fontSize: '0.9rem',
                    '@media print': {
                      color: '#000000 !important',
                      fontFamily: '"Public Sans", Arial, sans-serif !important',
                      fontSize: '11pt !important',
                      fontWeight: 'bold !important',
                    },
                  }}
                >
                  REGISTRO CARTORÁRIO & CONSULTA DE SELOS EXTRAJUDICIAIS
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2,
                  '@media print': {
                    gap: '8pt !important',
                  },
                }}
              >
                {document.cartorioSeals.map((seal, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      p: 2,
                      borderRadius: 1.5,
                      bgcolor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      '@media print': {
                        bgcolor: '#fafafa !important',
                        border: '1px solid #999999 !important',
                        p: '8pt !important',
                      },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#00ff7f',
                        fontWeight: 700,
                        display: 'block',
                        mb: 0.5,
                        '@media print': { color: '#000000 !important', fontWeight: 'bold !important', fontSize: '9pt !important' },
                      }}
                    >
                      {seal.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#fff',
                        fontSize: '0.85rem',
                        '@media print': { color: '#000000 !important', fontSize: '9.5pt !important' },
                      }}
                    >
                      Selo: <strong>{seal.seal}</strong> • Aleatório: <strong>{seal.randomCode}</strong>
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255,255,255,0.5)',
                        '@media print': { color: '#444444 !important', fontSize: '8.5pt !important' },
                      }}
                    >
                      Data de Transmissão: {seal.transmissionDate}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CyberCard>
          )}

          {/* 📖 Layout Principal: Navegação Lateral (Sticky) + Leitor de Artigos */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
              gap: { xs: 4, md: 5 },
              alignItems: 'start',
              '@media print': {
                display: 'block !important',
              },
            }}
          >
            {/* 📑 Sumário Lateral Fixo (Oculto 100% no Print) */}
            <Box
              className="no-print"
              sx={{
                position: { md: 'sticky' },
                top: { md: 100 },
                maxHeight: { md: 'calc(100vh - 120px)' },
                overflowY: { md: 'auto' },
                pr: { md: 1 },
                scrollbarWidth: 'thin',
                '@media print': { display: 'none !important' },
              }}
            >
              <CyberCard sx={{ p: 2.5, bgcolor: 'rgba(2, 8, 23, 0.85)' }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: '#00ff7f',
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  ÍNDICE DOS CAPÍTULOS
                </Typography>

                <Stack spacing={0.8}>
                  {document.chapters.map((chap) => {
                    const isSelected = activeChapterId === chap.id;

                    return (
                      <Box
                        key={chap.id}
                        onClick={() => scrollToChapter(chap.id)}
                        sx={{
                          p: 1.2,
                          borderRadius: 1,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 1.2,
                          bgcolor: isSelected ? 'rgba(0, 255, 127, 0.12)' : 'transparent',
                          borderLeft: isSelected ? '3px solid #00ff7f' : '3px solid transparent',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.04)',
                          },
                        }}
                      >
                        <Chip
                          size="small"
                          label={`CAP ${chap.romanNumeral}`}
                          sx={{
                            height: 20,
                            fontSize: 9,
                            fontWeight: 800,
                            fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                            bgcolor: isSelected ? '#00ff7f' : 'rgba(255,255,255,0.06)',
                            color: isSelected ? '#000' : 'rgba(255,255,255,0.6)',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: isSelected ? '#fff' : 'rgba(255,255,255,0.65)',
                            fontWeight: isSelected ? 700 : 500,
                            lineHeight: 1.35,
                            fontSize: '0.78rem',
                          }}
                        >
                          {chap.title}
                        </Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </CyberCard>
            </Box>

            {/* 📜 Corpo do Documento Jurídico */}
            <Box
              sx={{
                '& .doc-chapter': {
                  mb: 6,
                  pb: 5,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  '@media print': {
                    borderBottom: 'none !important',
                    mb: '20pt !important',
                    pb: '0 !important',
                    breakInside: 'auto !important',
                  },
                },
                '& .doc-chapter-header': {
                  '@media print': {
                    breakAfter: 'avoid !important',
                    pageBreakAfter: 'avoid !important',
                    mb: '12pt !important',
                  },
                },
                '& .doc-article': {
                  '@media print': {
                    breakInside: 'avoid !important',
                    pageBreakInside: 'avoid !important',
                    mb: '12pt !important',
                    pb: '4pt !important',
                  },
                },
              }}
            >
              {/* Declaração de Abertura */}
              {document.openingStatement && (
                <Box
                  sx={{
                    p: 2.5,
                    mb: 5,
                    borderRadius: 2,
                    bgcolor: 'rgba(0, 255, 127, 0.05)',
                    borderLeft: '4px solid #00ff7f',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontStyle: 'italic',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    '@media print': {
                      bgcolor: '#f5f5f5 !important',
                      color: '#000000 !important',
                      borderLeft: '3px solid #000000 !important',
                      p: '10pt !important',
                      mb: '16pt !important',
                      fontSize: '10.5pt !important',
                      breakInside: 'avoid !important',
                      pageBreakInside: 'avoid !important',
                    },
                  }}
                >
                  {document.openingStatement}
                </Box>
              )}

              {/* Mapeamento de Cada Capítulo */}
              {document.chapters.map((chap) => (
                <Box key={chap.id} id={chap.id} className="doc-chapter">
                  {/* Cabeçalho do Capítulo */}
                  <Box className="doc-chapter-header" sx={{ mb: 3 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: '#00ff7f',
                        fontWeight: 900,
                        letterSpacing: 2,
                        fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                        fontSize: '0.85rem',
                        display: 'block',
                        '@media print': {
                          color: '#000000 !important',
                          fontFamily: '"Public Sans", Arial, sans-serif !important',
                          fontWeight: 'bold !important',
                          fontSize: '11pt !important',
                          letterSpacing: '1pt !important',
                        },
                      }}
                    >
                      CAPÍTULO {chap.romanNumeral}
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                        fontWeight: 900,
                        color: '#fff',
                        fontSize: { xs: '1.25rem', md: '1.45rem' },
                        mt: 0.5,
                        mb: 1.5,
                        '@media print': {
                          color: '#000000 !important',
                          fontFamily: '"Public Sans", Arial, sans-serif !important',
                          fontSize: '14pt !important',
                          fontWeight: '900 !important',
                          mt: '4pt !important',
                          mb: '8pt !important',
                          borderBottom: '1px solid #000 !important',
                          pb: '4pt !important',
                        },
                      }}
                    >
                      {chap.title}
                    </Typography>

                    {chap.subtitle && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.6)',
                          fontStyle: 'italic',
                          lineHeight: 1.6,
                          fontSize: '0.88rem',
                          '@media print': {
                            color: '#333333 !important',
                            fontSize: '9.5pt !important',
                            lineHeight: '1.4 !important',
                            mb: '10pt !important',
                          },
                        }}
                      >
                        {chap.subtitle}
                      </Typography>
                    )}
                  </Box>

                  {/* Artigos do Capítulo */}
                  <Stack spacing={3.5} sx={{ '@media print': { gap: '10pt !important' } }}>
                    {chap.articles.map((art, artIdx) => (
                      <Box
                        key={artIdx}
                        className="doc-article"
                        sx={{
                          p: art.highlight ? 3 : 2,
                          borderRadius: 2,
                          bgcolor: art.highlight
                            ? 'rgba(0, 255, 127, 0.04)'
                            : 'transparent',
                          border: art.highlight
                            ? '1px solid rgba(0, 255, 127, 0.25)'
                            : 'none',
                          '@media print': {
                            bgcolor: 'transparent !important',
                            border: art.highlight ? '1px solid #000000 !important' : 'none !important',
                            p: art.highlight ? '10pt !important' : '0 !important',
                            borderRadius: '0 !important',
                          },
                        }}
                      >
                        {/* Título do Artigo */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.2 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: art.highlight ? '#00ff7f' : '#fff',
                              fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                              fontWeight: 800,
                              fontSize: '0.95rem',
                              letterSpacing: 0.5,
                              '@media print': {
                                color: '#000000 !important',
                                fontFamily: '"Public Sans", Arial, sans-serif !important',
                                fontWeight: '900 !important',
                                fontSize: '11pt !important',
                              },
                            }}
                          >
                            {art.number} – {art.title}
                          </Typography>

                          {art.highlight && (
                            <Chip
                              size="small"
                              label="WEB3 / BLOCKCHAIN"
                              sx={{
                                height: 20,
                                fontSize: 9,
                                fontWeight: 800,
                                bgcolor: 'rgba(0, 255, 127, 0.15)',
                                color: '#00ff7f',
                                border: '1px solid rgba(0, 255, 127, 0.3)',
                                '@media print': {
                                  bgcolor: 'transparent !important',
                                  color: '#000 !important',
                                  border: '1px solid #000 !important',
                                  fontSize: '7pt !important',
                                  height: '16pt !important',
                                },
                              }}
                            />
                          )}
                        </Box>

                        {/* Caput (apenas se houver texto) */}
                        {art.caput && art.caput.trim() !== '' && (
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.88)',
                              lineHeight: 1.8,
                              fontSize: '0.95rem',
                              mb: 1.5,
                              textAlign: 'justify',
                              '@media print': {
                                color: '#000000 !important',
                                fontSize: '10pt !important',
                                lineHeight: '1.55 !important',
                                mb: '6pt !important',
                              },
                            }}
                          >
                            {art.caput}
                          </Typography>
                        )}

                        {/* Itens / Alíneas do Caput */}
                        {art.items && art.items.length > 0 && (
                          <Stack spacing={1.5} sx={{ pl: { xs: 1.5, md: 3 }, mb: 2, '@media print': { pl: '12pt !important', gap: '4pt !important', mb: '6pt !important' } }}>
                            {art.items.map((item, itemIdx) => (
                              <Box key={itemIdx}>
                                {item.label && (
                                  <Typography
                                    component="span"
                                    sx={{
                                      color: '#00ff7f',
                                      fontWeight: 700,
                                      fontSize: '0.92rem',
                                      mr: 1,
                                      '@media print': {
                                        color: '#000000 !important',
                                        fontWeight: 'bold !important',
                                        fontSize: '10pt !important',
                                      },
                                    }}
                                  >
                                    {item.label}
                                  </Typography>
                                )}
                                <Typography
                                  component="span"
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    lineHeight: 1.7,
                                    fontSize: '0.92rem',
                                    whiteSpace: 'pre-line',
                                    '@media print': {
                                      color: '#000000 !important',
                                      fontSize: '10pt !important',
                                      lineHeight: '1.5 !important',
                                    },
                                  }}
                                >
                                  {item.text}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        )}

                        {/* Parágrafos */}
                        {art.paragraphs && art.paragraphs.length > 0 && (
                          <Stack spacing={2} sx={{ mt: 2, pl: { xs: 1.5, md: 2.5 }, '@media print': { mt: '6pt !important', pl: '8pt !important', gap: '5pt !important' } }}>
                            {art.paragraphs.map((p, pIdx) => (
                              <Box key={pIdx}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: 'rgba(255, 255, 255, 0.85)',
                                    lineHeight: 1.75,
                                    fontSize: '0.93rem',
                                    textAlign: 'justify',
                                    '@media print': {
                                      color: '#000000 !important',
                                      fontSize: '10pt !important',
                                      lineHeight: '1.5 !important',
                                    },
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      fontWeight: 800,
                                      color: art.highlight ? '#00ff7f' : '#ffffff',
                                      mr: 0.5,
                                      '@media print': {
                                        color: '#000000 !important',
                                        WebkitTextFillColor: '#000000 !important',
                                        fontWeight: 'bold !important',
                                      },
                                    }}
                                  >
                                    {p.number}
                                    {p.title ? ` – ${p.title}: ` : ': '}
                                  </Box>
                                  {p.text}
                                </Typography>

                                {p.items && p.items.length > 0 && (
                                  <Stack spacing={1} sx={{ pl: 2, mt: 1, '@media print': { pl: '10pt !important', mt: '3pt !important', gap: '3pt !important' } }}>
                                    {p.items.map((pItem, pItemIdx) => (
                                      <Typography
                                        key={pItemIdx}
                                        variant="body2"
                                        sx={{
                                          color: 'rgba(255, 255, 255, 0.78)',
                                          lineHeight: 1.65,
                                          fontSize: '0.9rem',
                                          '@media print': {
                                            color: '#000000 !important',
                                            fontSize: '9.5pt !important',
                                            lineHeight: '1.45 !important',
                                          },
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            fontWeight: 700,
                                            color: art.highlight ? '#00ff7f' : 'rgba(255, 255, 255, 0.95)',
                                            mr: 0.5,
                                            '@media print': {
                                              color: '#000000 !important',
                                              WebkitTextFillColor: '#000000 !important',
                                              fontWeight: 'bold !important',
                                            },
                                          }}
                                        >
                                          {pItem.label}{' '}
                                        </Box>
                                        {pItem.text}
                                      </Typography>
                                    ))}
                                  </Stack>
                                )}
                              </Box>
                            ))}
                          </Stack>
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ))}

              {/* ✍️ Bloco Oficial de Encerramento e Assinaturas (Página 33) */}
              <CyberCard
                className="doc-signatures-block"
                sx={{
                  p: { xs: 3, md: 5 },
                  mt: 6,
                  bgcolor: 'rgba(2, 8, 23, 0.9)',
                  border: '1px solid rgba(0, 255, 127, 0.3)',
                  textAlign: 'center',
                  '@media print': {
                    bgcolor: '#ffffff !important',
                    border: '1.5pt solid #000000 !important',
                    borderRadius: '0 !important',
                    boxShadow: 'none !important',
                    p: '16pt !important',
                    mt: '24pt !important',
                    mb: '0 !important',
                    breakBefore: 'page !important',
                    pageBreakBefore: 'always !important',
                    breakInside: 'avoid !important',
                    pageBreakInside: 'avoid !important',
                  },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: '#00ff7f',
                    fontWeight: 900,
                    letterSpacing: 2,
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    display: 'block',
                    mb: 1,
                    '@media print': {
                      color: '#000000 !important',
                      fontFamily: '"Public Sans", Arial, sans-serif !important',
                      fontWeight: 'bold !important',
                      fontSize: '11pt !important',
                    },
                  }}
                >
                  FECHAMENTO & MESA DIRETORA DA ASSEMBLEIA
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: '#fff',
                    fontWeight: 800,
                    mb: 4,
                    '@media print': {
                      color: '#000000 !important',
                      fontSize: '13pt !important',
                      fontWeight: 'bold !important',
                      mb: '18pt !important',
                    },
                  }}
                >
                  {document.cityState}, {document.approvalDate}
                </Typography>

                {/* Grid de Signatários */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                    gap: 4,
                    mb: 4,
                    '@media print': {
                      gridTemplateColumns: 'repeat(3, 1fr) !important',
                      gap: '16pt !important',
                      mb: '16pt !important',
                    },
                  }}
                >
                  {document.signatories.map((sig, sIdx) => (
                    <Box key={sIdx} sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 140,
                          height: 1,
                          bgcolor: 'rgba(255, 255, 255, 0.25)',
                          mx: 'auto',
                          mb: 1.5,
                          '@media print': { bgcolor: '#000000 !important', height: '1.5pt !important' },
                        }}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#fff',
                          fontWeight: 700,
                          fontFamily: '"Public Sans", sans-serif',
                          fontSize: '1rem',
                          '@media print': {
                            color: '#000000 !important',
                            fontWeight: 'bold !important',
                            fontSize: '10.5pt !important',
                          },
                        }}
                      >
                        {sig.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#00ff7f',
                          fontWeight: 600,
                          display: 'block',
                          fontSize: '0.8rem',
                          '@media print': {
                            color: '#222222 !important',
                            fontWeight: '600 !important',
                            fontSize: '8.5pt !important',
                          },
                        }}
                      >
                        {sig.role}
                      </Typography>
                      {sig.oab && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'rgba(255,255,255,0.5)',
                            display: 'block',
                            fontSize: '0.75rem',
                            '@media print': {
                              color: '#555555 !important',
                              fontSize: '8pt !important',
                            },
                          }}
                        >
                          {sig.oab}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>

                {/* Hash Criptográfico e Chave de Imutabilidade */}
                {document.sha256 && (
                  <Box
                    sx={{
                      pt: 3,
                      borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
                      '@media print': { borderTop: '1px dashed #999999 !important', pt: '10pt !important' },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255,255,255,0.4)',
                        display: 'block',
                        mb: 0.5,
                        '@media print': { color: '#444444 !important', fontSize: '8pt !important', fontWeight: 'bold !important' },
                      }}
                    >
                      IMPRESSÃO DIGITAL CRIPTOGRÁFICA DO DOCUMENTO (SHA-256)
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: 'monospace',
                        color: '#00d2ff',
                        fontWeight: 700,
                        wordBreak: 'break-all',
                        fontSize: '0.75rem',
                        '@media print': { color: '#000000 !important', fontSize: '8pt !important' },
                      }}
                    >
                      {document.sha256}
                    </Typography>
                  </Box>
                )}
              </CyberCard>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
