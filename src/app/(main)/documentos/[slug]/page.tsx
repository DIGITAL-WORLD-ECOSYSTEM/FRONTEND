import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { constructMetadata } from 'src/lib/seo/metadata';
import { getLegalDocumentBySlug, OFFICIAL_DOCUMENTS_REGISTRY } from 'src/legacy/data/documents';
import { DocumentDetailView } from 'src/legacy/sections/documentos/_view';

// ----------------------------------------------------------------------

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(OFFICIAL_DOCUMENTS_REGISTRY).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDocumentBySlug(slug);

  if (!doc) {
    return constructMetadata({
      title: 'Documento Não Encontrado',
      description: 'O documento solicitado não foi encontrado no portal da ASPPIBRA DAO.',
    });
  }

  return constructMetadata({
    title: `${doc.title} (${doc.code})`,
    description: `${doc.subtitle} - ${doc.organization} (${doc.jurisdiction}). Vigência oficial: ${doc.effectiveDate}.`,
  });
}

export default async function DocumentDetailPage({ params }: Props) {
  const { slug } = await params;
  const doc = getLegalDocumentBySlug(slug);

  if (!doc) {
    notFound();
  }

  return <DocumentDetailView document={doc} />;
}
