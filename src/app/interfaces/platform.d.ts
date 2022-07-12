export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  year_end: number | null;
  year_start: number | null;
  games_count: number;
  image_background: string;
}

export interface PlatformSummary
  extends Pick<Platform, 'id' | 'name' | 'slug'> {}

export interface ParentPlatflorm {
  platform: PlatformSummary;
}
