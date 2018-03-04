declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}

type Tag = React.ComponentType<any> | keyof React.ReactHTML;

interface PortfolioThumbMeta {
  fit?:
    | 'cover'
    | 'contain'
    | 'fill'
    | 'inherit'
    | 'initial'
    | 'none'
    | 'scale-down'
    | 'unset';
  position?: string;
  column?: string;
  row?: string;
}

interface DetailMeta {
  grid?: string[];
}

interface PortfolioMeta {
  stackDesign?: boolean;
  websiteUrl?: string;
  isSVG: boolean;
  thumb?: PortfolioThumbMeta;
  showTitle?: boolean;
  detail?: DetailMeta;
  highlightColor?: string;
}

interface BackgroundStyles {
  backgroundPosition?: string;
  filter?: string;
  applyGradient?: boolean;
  size?: string;
}

type ImageUsage = 'hero' | 'background' | 'gallery';

interface PortfolioImageMeta {
  backgroundStyles?: BackgroundStyles;
  usage: ImageUsage[];
}

interface PortfolioImage {
  originalUrl: string;
  largeUrl?: string;
  mediumUrl?: string;
  thumbUrl?: string;
  title?: string;
  description?: string;
  priority?: number;
  meta?: PortfolioImageMeta;
}

interface RawPortfolio {
  title: string;
  description?: string;
  meta?: PortfolioMeta;
  category: string[];
  tags: string[];
  svgSource?: string;
  imagePaths: PortfolioImage[];
}

interface Portfolio extends RawPortfolio {
  [key: string]: any;
  id: string;
}

type TypeSize = [number, number];
interface TypeMap {
  [x: string]: TypeSize;
}

interface FetchPortfolioItemsParams {
  pageSize?: number;
}

interface ProfessionalRole extends Role {
  yearFrom: string;
}

interface Role {
  title: string;
  yearFrom?: string;
  yearTo?: string;
}

interface ProfessionalExperience {
  organization: string;
  roles: ProfessionalRole[];
  accomplishments?: string[];
}

interface Website {
  url: string;
  title?: string;
  disabled?: boolean;
}

interface RelatedExperience {
  title: string;
  meta?: string;
  website?: Website;
  role: Role;
  accomplishments: string[];
}

interface Education {
  institution: string;
  location?: string;
  year?: string;
  degree?: string;
  meta?: string;
}

interface Resume {
  name: string;
  title: string;
  lead: string;
  skills?: string[];
  professionalExperience?: ProfessionalExperience[];
  relatedExperience?: RelatedExperience[];
  education?: Education[];
}

interface AppState {
  resume: Resume;
  portfolioItems: Portfolio[];
}

interface Context {
  url?: string;
  notFound?: boolean;
}

interface AppWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  INITIAL_STATE?: any;
}
