export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Role {
  title: string;
  yearFrom?: string;
  yearTo?: string;
}

export interface ProfessionalExperience {
  organization: string;
  roles: Role[];
  accomplishments: string[];
}

export interface Website {
  url: string;
}

export interface RelatedExperience {
  title: string;
  meta?: string;
  accomplishments: string[];
  role: Role;
  website?: Website;
}

export interface Talk {
  description: string;
  title: string;
  url?: string;
  year: string;
}
