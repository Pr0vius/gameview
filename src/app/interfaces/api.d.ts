type ordering = 'name' | 'released' | 'added' | 'created' | 'updated' | 'rating' | 'metacritic' | '-name' | '-released' | '-added' | '-created' | '-updated' | '-rating' | '-metacritic';

export interface ApiParams {
  page?: number;
  page_size?: number;
  ordering?: ordering;
}
export interface APIGetGamesParams extends ApiParams {
  search?: string;
  search_precise?: string;
  search_exact?: boolean;
  parent_platforms?: string;
  platforms?: string;
  stores?: string;
  developers?: string;
  publishers?: string;
  genres?: string;
  tags?: string;
  creators?: string;
  dates?: string;
  updated?: string;
  platforms_count?: number;
  metacritic?: string;
  exclude_collection?: number;
  exclude_additions?: boolean;
  exclude_parents?: boolean;
  exclude_game_series?: boolean;
  exclude_stores?: string;
}

export interface ApiResponse<Type> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Type;
}
export interface ApiResponseExtra<Type> extends ApiResponse<Type> {
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: object;
  nofollow_collections: string[];
}
export interface ApiErrorResponse {
  detail: string;
}
