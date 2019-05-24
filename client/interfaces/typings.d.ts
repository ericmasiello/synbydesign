declare module '*.css' {
  const value: any;
  export = value;
}

declare module '*.scss' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}

type Tag = string | React.ComponentType<any>;

type Portfolio = {
  id: string;
  title: string;
  description: string;
};
