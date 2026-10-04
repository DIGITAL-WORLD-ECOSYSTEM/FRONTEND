export interface IDocumentArticleItem {
  label?: string; // e.g. "a)", "I -", "§ 1º"
  text: string;
}

export interface IDocumentParagraph {
  number: string; // e.g. "§ 1º", "Parágrafo único", "§ 2º"
  title?: string;
  text: string;
  items?: IDocumentArticleItem[];
}

export interface IDocumentArticle {
  number: string; // e.g. "Art. 1º", "Art. 6º-A"
  title: string;
  caput: string;
  items?: IDocumentArticleItem[];
  paragraphs?: IDocumentParagraph[];
  highlight?: boolean; // e.g. for Art. 6º-A (CADs & Blockchain)
}

export interface IDocumentChapter {
  id: string; // e.g. "capitulo-1"
  romanNumeral: string; // e.g. "I", "II"
  title: string;
  subtitle?: string;
  articles: IDocumentArticle[];
}

export interface IDocumentSeal {
  label: string; // e.g. "Estatuto Social — V1"
  seal: string; // e.g. "EBTL98079"
  randomCode: string; // e.g. "KPG"
  transmissionDate: string; // e.g. "30/09/2016"
  qrCodeUrl?: string;
}

export interface IDocumentSignatory {
  name: string;
  role: string;
  oab?: string;
}

export interface ILegalDocumentFull {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  organization: string;
  digitalName?: string;
  category: string;
  version: string;
  jurisdiction: string;
  cityState: string;
  approvalDate: string;
  effectiveDate: string;
  officialUrls: string[];
  cartorioSeals: IDocumentSeal[];
  technicalTeam: {
    coordenacao: string[];
    redacao: string[];
    revisaoJuridica: string[];
    diagramacao: string[];
  };
  openingStatement?: string;
  chapters: IDocumentChapter[];
  signatories: IDocumentSignatory[];
  sha256?: string;
}
