export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface PublisherDetails extends Publisher {
  description: string;
}
