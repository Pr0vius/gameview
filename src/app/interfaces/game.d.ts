import { Developer } from './developer';
import { Genre } from './genre';
import { ParentPlatflorm, Platform, PlatformSummary } from './platform';
import { Publisher } from './publisher';
import { Store } from './store';
import { Tag } from './tag';

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  ratings: GamesRating[];
  ratings_count: number;
  reviews_text_count: number | string;
  added: number;
  added_by_status: {
    [key: string]: number;
  };
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: string;
  user_game: null;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: GamePlatform[];
  parent_platforms: ParentPlatflorm[];
}

export interface GameDetails extends Game {
  name_original: string;
  description: string;
  metacritic_platforms: MetacriticPlatforms[];
  background_image_additional: string;
  website: string;
  rating_top: number;
  reactions: { [key: number]: number };
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string | number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string | number;
  youtube_count: string | number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: ESRBRating;
  stores: GameStore[];
  developers: Developer[];
  genres: Genre[];
  tags: Tag[];
  publishers: Publisher[];
  clip: null;
  description_raw: string;
}
export interface MetacriticPlatforms {
  metascore: number;
  url: string;
  platform?: PlatformSummary;
}
export interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}
export interface GameStore {
  id: number;
  url: string;
  store: Store;
}
export interface GamesRating {
  id: number;
  title: string;
  count: number;
  percent: number;
}
export interface GamePlatform {
  platform: Platform;
  released_at: string;
  requirements_en?: GamePlatformRequeriments | Object | null;
  requirements_ru?: GamePlatformRequeriments | Object | null;
  requirements?: GamePlatformRequeriments | Object | null;
}
export interface GamePlatformRequeriments {
  minimun: string | null;
  recommended: string | null;
}
