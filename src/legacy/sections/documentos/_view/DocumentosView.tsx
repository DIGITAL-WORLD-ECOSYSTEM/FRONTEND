'use client';

import type { IDocumentConfig } from 'src/_mock/_documents';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';
import { HomeBackground } from 'src/components/background';
import { Iconify } from 'src/components/iconify';
import { CyberCard } from 'src/components/cyber-card';
import { CyberButton } from 'src/components/cyber-button';
import { DOCUMENTS, DOCUMENT_CATEGORIES } from 'src/_mock/_documents';

// ----------------------------------------------------------------------

export function DocumentosView() {
  const theme = useTheme();
  const router = useRouter();

  const handleDocumentAction = (doc: IDocumentConfig) => {
    if (doc.isReady && doc.readyUrl) {
      router.push(doc.readyUrl);
    } else {
      // Abre a página de documento em desenvolvimento ou modelo
      router.push(`/documentos/${doc.slug}`);
    }
  };

  return (
    <>
      {/* 🌌 Fundo Estelar & Atmosfera Web3 */}
      <HomeBackground />

      <Box
        component="main"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 14, md: 18 },
          pb: { xs: 12, md: 16 },
        }}
      >
        <Container maxWidth="lg">
          {/* 📘 1º Card em Destaque — Whitepaper Oficial */}
          <CyberCard
            sx={{
              p: { xs: 3, md: 4.5 },
              mb: { xs: 6, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 3.5,
            }}
          >
            {/* Ícone Estilizado */}
            <Box
              sx={{
                width: { xs: 60, md: 76 },
                height: { xs: 60, md: 76 },
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(0, 255, 127, 0.12)',
                color: '#00ff7f',
                border: '1px solid rgba(0, 255, 127, 0.3)',
                boxShadow: '0 0 30px rgba(0, 255, 127, 0.2)',
                flexShrink: 0,
              }}
            >
              <Iconify icon={"solar:star-bold" as any} width={38} />
            </Box>

            {/* Informações Centrais */}
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.2 }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#fff',
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 900,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    fontSize: { xs: '1.35rem', md: '1.65rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box component="span" sx={{ color: '#00ff7f' }}>⭐</Box> WHITEPAPER
                </Typography>
                <Chip
                  size="small"
                  label="2026"
                  sx={{
                    height: 22,
                    fontSize: 11,
                    fontWeight: 800,
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    bgcolor: 'rgba(0, 255, 127, 0.15)',
                    color: '#00ff7f',
                    border: '1px solid rgba(0, 255, 127, 0.3)',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  maxWidth: 720,
                }}
              >
                Tese técnica completa sobre a arquitetura de tokenização de ativos reais, modelo econômico
                do token, oráculos descentralizados, fracionamento de terras, governança on-chain e
                infraestrutura para o agronegócio regenerativo.
              </Typography>
            </Box>

            {/* Botão de Ação */}
            <Box sx={{ flexShrink: 0, width: { xs: '100%', md: 'auto' } }}>
              <CyberButton
                glowColor="primary"
                onClick={() => router.push('/whitepaper')}
                endIcon={<Iconify icon={"solar:eye-bold" as any} />}
                sx={{ width: { xs: '100%', md: 220 }, height: 48 }}
              >
                LER WHITEPAPER
              </CyberButton>
            </Box>
          </CyberCard>

          {/* 🗂️ Categorias e Lista de Cards */}
          {DOCUMENT_CATEGORIES.map((cat) => {
            const categoryDocs = DOCUMENTS.filter((d) => d.category === cat.id);
            if (categoryDocs.length === 0) return null;

            return (
              <Box key={cat.id} sx={{ mb: 7 }}>
                {/* Título da Categoria com Ícone Luminoso */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: alpha(theme.palette[cat.color].main, 0.12),
                      color: theme.palette[cat.color].main,
                      border: `1px solid ${alpha(theme.palette[cat.color].main, 0.25)}`,
                    }}
                  >
                    <Iconify icon={cat.icon as any} width={26} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#fff',
                        fontWeight: 800,
                        fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                      {cat.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Grade de Cards da Categoria */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(3, 1fr)',
                    },
                    gap: 3,
                  }}
                >
                  {categoryDocs.map((doc) => (
                    <CyberCard
                      key={doc.slug}
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: `0 0 35px ${alpha(theme.palette[cat.color].main, 0.2)}`,
                          '& .doc-icon': {
                            transform: 'scale(1.1) rotate(-5deg)',
                            color: theme.palette[cat.color].main,
                          },
                        },
                      }}
                    >
                      {/* Efeito Glow Suave no Topo Direito */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -40,
                          right: -40,
                          width: 110,
                          height: 110,
                          background: `radial-gradient(circle, ${alpha(theme.palette[cat.color].main, 0.12)} 0%, transparent 70%)`,
                          borderRadius: '50%',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Cabeçalho do Card: Ícone + Código + Status */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          className="doc-icon"
                          sx={{
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1.5,
                            bgcolor: alpha(theme.palette[cat.color].main, 0.08),
                            color: alpha(theme.palette[cat.color].main, 0.7),
                            border: `1px solid ${alpha(theme.palette[cat.color].main, 0.18)}`,
                            transition: 'all 0.3s ease',
                            flexShrink: 0,
                          }}
                        >
                          <Iconify icon={doc.icon as any} width={26} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {doc.code ? (
                              <Typography
                                variant="caption"
                                sx={{
                                  color: theme.palette[cat.color].main,
                                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                                  fontWeight: 700,
                                  fontSize: 10,
                                }}
                              >
                                {doc.code}
                              </Typography>
                            ) : <Box />}

                            <Chip
                              size="small"
                              label={doc.size}
                              sx={{
                                height: 20,
                                fontSize: 10,
                                fontWeight: 600,
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                color: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                              }}
                            />
                          </Box>

                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: '#fff',
                              fontWeight: 700,
                              lineHeight: 1.35,
                              minHeight: 44,
                              fontFamily: '"Public Sans", sans-serif',
                            }}
                          >
                            {doc.title}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Descrição do Documento */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.6)',
                          lineHeight: 1.6,
                          fontSize: '0.875rem',
                          flexGrow: 1,
                        }}
                      >
                        {doc.description}
                      </Typography>

                      {/* Botão de Ação */}
                      <CyberButton
                        onClick={() => handleDocumentAction(doc)}
                        fullWidth
                        glowColor={cat.color as any}
                        endIcon={
                          <Iconify
                            icon={
                              (doc.type === 'sign'
                                ? 'solar:pen-new-round-bold'
                                : doc.type === 'pdf'
                                  ? 'solar:eye-bold'
                                  : 'solar:document-bold') as any
                            }
                          />
                        }
                        sx={{ mt: 1, height: 42, fontSize: '0.78rem' }}
                      >
                        {doc.type === 'sign'
                          ? 'ASSINAR INSTRUMENTO'
                          : doc.type === 'pdf'
                            ? 'LER DOCUMENTO'
                            : 'VER MODELO'}
                      </CyberButton>
                    </CyberCard>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Container>
      </Box>
    </>
  );
}
