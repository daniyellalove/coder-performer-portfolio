export type Mode = 'dev' | 'performer';

export interface BaseCard {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  year?: number;
}

export interface Project extends BaseCard {
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Credit extends BaseCard {
  role: string;
  type: 'commercial' | 'film' | 'print' | 'digital' | 'theater';
  client?: string;
  director?: string;
}
