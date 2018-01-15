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

interface PortfolioThumbMeta {
  size?: string;
  position?: string;
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
  featured?: boolean;
}

interface Portfolio extends RawPortfolio {
  [key: string]: any;
  id: string;
}

type TypeSize = [number, number];
interface TypeMap {
  [x: string]: TypeSize;
}

// Old stuff below...

interface AppState {
  users: User[];
  portfolioItems: Portfolio[];
}

interface Context {
  url?: string;
  notFound?: boolean;
}

interface User {
  id: string;
  name: string;
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  INITIAL_STATE?: any;
}

interface RequireAuthHOC {
  (ChildComponent: React.ComponentType<any>): React.ComponentType<any>;
}
