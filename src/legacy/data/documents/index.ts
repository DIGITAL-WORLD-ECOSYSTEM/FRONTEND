import { ESTATUTO_SOCIAL_DATA } from './estatuto-social';
import type { ILegalDocumentFull } from './types';

export * from './types';
export * from './estatuto-social';

export const OFFICIAL_DOCUMENTS_REGISTRY: Record<string, ILegalDocumentFull> = {
  'estatuto-social': ESTATUTO_SOCIAL_DATA,
};

export function getLegalDocumentBySlug(slug: string): ILegalDocumentFull | undefined {
  return OFFICIAL_DOCUMENTS_REGISTRY[slug];
}
