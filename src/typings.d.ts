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

declare module '*.json' {
  const value: any;
  export = value;
}

declare module 'mixpanel-browser' {
  interface Mixpanel {
    init: (token: string) => void;
    track: (eventName: string, trackDetails?: object) => void;
  }
  const mixpanel: Mixpanel;
  export = mixpanel;
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

interface LikedPortfolio extends Portfolio {
  liked: boolean;
}

type Like = string;

type TypeSize = [number, number];
interface TypeMap {
  [x: string]: TypeSize;
}

interface PortfolioRequestParams {
  pageSize?: number;
  requestedPageNumber?: number;
  categories?: string[];
  tags?: string[];
  searchTerm?: string;
}

interface PortfolioReceivedParams {
  pageSize?: string;
  requestedPageNumber?: string;
  categories?: string;
  tags?: string;
  searchTerm?: string;
}

interface PortfolioFilterResult {
  items: Portfolio[];
  currentPageNumber: number;
  pageSize: number;
  totalPages: number;
  filterCategories: string[];
  filterTags: string[];
  filterSearchTerm: string;
}

interface PortfolioResponseParams {
  _pagesize?: string;
  _currentpagenumber?: string;
  _totalpages?: string;
  _filtercategories?: string;
  _filtertags?: string;
  _filtersearchterm?: string;
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
}

interface Resume {
  ownerName: string;
  ownerTitle: string;
  lead: string;
  skills?: string[];
  professionalExperience?: ProfessionalExperience[];
  relatedExperience?: RelatedExperience[];
  education?: Education[];
}

interface UIPortfolioMeta {
  currentPageNumber: number;
  pageSize: number;
  totalPages: number;
  filterCategories: string;
  filterTags: string;
  filterSearchTerm: string;
}

interface UIMeta {
  portfolio: UIPortfolioMeta;
}

interface AppState {
  resume: Resume;
  portfolioItems: Portfolio[];
  ui: UIMeta;
  likes: Like[];
}

interface Context {
  url?: string;
  notFound?: boolean;
}

interface AppWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  INITIAL_STATE?: any;
}

interface ServiceWorkerEvent extends ExtendableEvent {
  request: Request;
  respondWith: (arg: Promise<any>) => void;
}

interface StatusResponse {
  code: number;
  message: string;
}

type LikeAction = 'like' | 'unlike';
