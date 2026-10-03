'use client';

import { useState, useMemo } from 'react';
import type { IDocumentConfig } from 'src/_mock/_documents';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
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

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtragem combinada por busca e categoria
  const filteredDocuments = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (doc.code && doc.code.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || doc.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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
          pt: { xs: 12, md: 16 },
          pb: { xs: 12, md: 16 },
        }}
      >
        <Container maxWidth="lg">
          {/* 🌟 Cabeçalho Principal */}
          <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
            <Box sx={{ display: 'inline-flex', justifyContent: 'center' }}>
              <Chip
                icon={<Iconify icon={"solar:diploma-verified-bold" as any} width={18} sx={{ color: '#00ff7f !important' }} />}
                label="CONFORMIDADE JURÍDICA & GOVERNANÇA ABNT"
                sx={{
                  bgcolor: 'rgba(0, 255, 127, 0.08)',
                  color: '#00ff7f',
                  border: '1px solid rgba(0, 255, 127, 0.25)',
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: 1.5,
                  py: 0.5,
                  px: 1,
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                background: 'linear-gradient(90deg, #ffffff 0%, #00ff7f 50%, #00d2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 30px rgba(0, 255, 127, 0.2)',
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
              }}
            >
              Portal de Documentos
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.65)',
                maxWidth: 760,
                mx: 'auto',
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.7,
              }}
            >
              Acesso centralizado e auditável a todos os instrumentos jurídicos, estatutos sociais,
              contratos de cessão de posse, políticas de governança e laudos técnicos da <strong>ASPPIBRA-DAO</strong>.
            </Typography>
          </Stack>

          {/* 🔍 Barra de Busca e Filtros Rápidos */}
          <Stack spacing={3} sx={{ mb: { xs: 5, md: 7 } }}>
            <TextField
              fullWidth
              placeholder="Buscar documento por título, código oficial (ex: CONTR-POSSE-17) ou assunto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={"solar:magnifer-linear" as any} width={22} sx={{ color: '#00ff7f' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    height: 56,
                    borderRadius: 2,
                    bgcolor: 'rgba(2, 8, 23, 0.85)',
                    backdropFilter: 'blur(16px)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontFamily: '"Public Sans", sans-serif',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'border-color 0.3s ease',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(0, 255, 127, 0.4) !important',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00ff7f !important',
                      boxShadow: '0 0 20px rgba(0, 255, 127, 0.25)',
                    },
                  },
                },
              }}
            />

            {/* Abas / Pílulas de Categoria */}
            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
                overflowX: 'auto',
                pb: 1,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              <Chip
                label={`Todos (${DOCUMENTS.length})`}
                onClick={() => setSelectedCategory('all')}
                clickable
                sx={{
                  fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: 0.5,
                  height: 38,
                  px: 1.5,
                  borderRadius: 1.5,
                  bgcolor:
                    selectedCategory === 'all'
                      ? '#00ff7f'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === 'all' ? '#000' : 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid',
                  borderColor:
                    selectedCategory === 'all'
                      ? '#00ff7f'
                      : 'rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    bgcolor:
                      selectedCategory === 'all'
                        ? '#00ff7f'
                        : 'rgba(255, 255, 255, 0.08)',
                    borderColor: '#00ff7f',
                  },
                }}
              />

              {DOCUMENT_CATEGORIES.map((cat) => {
                const count = DOCUMENTS.filter((d) => d.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;

                return (
                  <Chip
                    key={cat.id}
                    icon={<Iconify icon={cat.icon as any} width={18} sx={{ color: isSelected ? '#000 !important' : `${theme.palette[cat.color].main} !important` }} />}
                    label={`${cat.title} (${count})`}
                    onClick={() => setSelectedCategory(cat.id)}
                    clickable
                    sx={{
                      fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      letterSpacing: 0.5,
                      height: 38,
                      px: 1.5,
                      borderRadius: 1.5,
                      bgcolor: isSelected
                        ? theme.palette[cat.color].main
                        : 'rgba(255, 255, 255, 0.04)',
                      color: isSelected ? '#000' : 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid',
                      borderColor: isSelected
                        ? theme.palette[cat.color].main
                        : 'rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: isSelected
                          ? theme.palette[cat.color].main
                          : 'rgba(255, 255, 255, 0.08)',
                        borderColor: theme.palette[cat.color].main,
                      },
                    }}
                  />
                );
              })}
            </Box>
          </Stack>

          {/* 📘 Documento em Destaque — Instrumento Particular de Cessão de Posse */}
          {selectedCategory === 'all' && !searchQuery && (
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
                <Iconify icon={"solar:diploma-verified-bold" as any} width={38} />
              </Box>

              {/* Informações Centrais */}
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#00ff7f',
                      fontWeight: 800,
                      letterSpacing: 2,
                      fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    }}
                  >
                    ⭐ INSTRUMENTO JURÍDICO EM DESTAQUE
                  </Typography>
                  <Chip
                    size="small"
                    label="CONTR-POSSE-17"
                    sx={{
                      height: 20,
                      fontSize: 10,
                      fontWeight: 800,
                      fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                      bgcolor: 'rgba(0, 255, 127, 0.15)',
                      color: '#00ff7f',
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    color: '#fff',
                    fontFamily: 'var(--font-orbitron), "Orbitron", sans-serif',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    mb: 1.2,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  Instrumento Particular de Cessão de Direitos Possessórios
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    maxWidth: 720,
                  }}
                >
                  Minuta jurídica completa contendo 17 capítulos detalhados, qualificação das partes,
                  declarações possessórias, responsabilidades fiscais, compromisso arbitral e assinaturas digitais
                  auditáveis com carimbo de tempo e hash SHA-256.
                </Typography>
              </Box>

              {/* Botão de Ação */}
              <Box sx={{ flexShrink: 0, width: { xs: '100%', md: 'auto' } }}>
                <CyberButton
                  glowColor="primary"
                  onClick={() => router.push('/documentos/cessao-de-posse')}
                  endIcon={<Iconify icon={"solar:pen-new-round-bold" as any} />}
                  sx={{ width: { xs: '100%', md: 220 }, height: 48 }}
                >
                  VER CONTRATO
                </CyberButton>
              </Box>
            </CyberCard>
          )}

          {/* 🗂️ Categorias e Lista de Cards */}
          {DOCUMENT_CATEGORIES.map((cat) => {
            const categoryDocs = filteredDocuments.filter((d) => d.category === cat.id);
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

          {/* Feedback se a busca for vazia */}
          {filteredDocuments.length === 0 && (
            <Box
              sx={{
                textAlign: 'center',
                py: 10,
                px: 3,
                borderRadius: 3,
                bgcolor: 'rgba(2, 8, 23, 0.6)',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
              }}
            >
              <Iconify icon={"solar:document-cross-bold" as any} width={56} sx={{ color: 'text.disabled', mb: 2 }} />
              <Typography variant="h5" sx={{ color: '#fff', mb: 1, fontWeight: 700 }}>
                Nenhum documento encontrado
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                Não foram encontrados documentos correspondentes ao termo &quot;{searchQuery}&quot;.
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
