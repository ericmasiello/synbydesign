declare module 'express-http-proxy';

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

interface ImagePath {
  url: string;
  width?: number;
  height?: number;
}

interface RawPortfolio {
  title: string;
  description?: string;
  meta?: {
    stackDesign?: boolean;
    mixUrl?: string;
    trackList?: string[];
    websiteUrl?: string;
    isSVG: boolean;
  };
  category: string[];
  tags: string[];
  svgSource?: string;
  imagePaths: {
    full?: ImagePath;
    medium?: ImagePath;
    thumbnail?: ImagePath;
    large?: ImagePath;
  };
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

type Auth = AuthToken | null | false;

interface AppState {
  users: User[];
  admins: User[];
  auth: Auth;
}

interface AuthToken {
  googleId: string;
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
