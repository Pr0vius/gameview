import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomePage } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { GameDetailsComponent } from './pages/games/game-details/game-details.component';
import { SearchComponent } from './components/layout/search/search.component';
import { PlatformComponent } from './pages/platforms/platform/platform.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { GenresComponent } from './pages/genres/genres.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { GamesComponent } from './pages/games/games.component';
import { GenreComponent } from './pages/genres/genre/genre.component';
import { TagsComponent } from './pages/tags/tags.component';
import { TagComponent } from './pages/tags/tag/tag.component';
import { FormsModule } from '@angular/forms';
import { DevelopersComponent } from './pages/developers/developers.component';
import { DeveloperComponent } from './pages/developers/developer/developer.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { PublisherComponent } from './pages/publishers/publisher/publisher.component';
import { SidebarIconsComponent } from './components/layout/sidebar/sidebar-icons/sidebar-icons.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';

@NgModule({
  declarations: [
    HomePage,
    LayoutComponent,
    SidebarComponent,
    GameDetailsComponent,
    SearchComponent,
    PlatformComponent,
    FooterComponent,
    GenresComponent,
    PlatformsComponent,
    GamesComponent,
    GenreComponent,
    TagsComponent,
    TagComponent,
    DevelopersComponent,
    DeveloperComponent,
    PublishersComponent,
    PublisherComponent,
    SidebarIconsComponent,
    ButtonMenuComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule, FormsModule],
})
export class WebsiteModule {}
