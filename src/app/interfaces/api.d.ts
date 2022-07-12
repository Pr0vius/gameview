export interface ApiResponse<Type> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Type[];
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
