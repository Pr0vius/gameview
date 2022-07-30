export interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface DeveloperDetails extends Developer {
  description: string;
}
