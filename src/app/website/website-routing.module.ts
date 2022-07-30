import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DeveloperComponent } from './pages/developers/developer/developer.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { GameDetailsComponent } from './pages/games/game-details/game-details.component';
import { GamesComponent } from './pages/games/games.component';
import { GenreComponent } from './pages/genres/genre/genre.component';
import { GenresComponent } from './pages/genres/genres.component';
import { HomePage } from './pages/home/home.component';
import { PlatformComponent } from './pages/platforms/platform/platform.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { PublisherComponent } from './pages/publishers/publisher/publisher.component';
import { PublishersComponent } from './pages/publishers/publishers.component';
import { TagComponent } from './pages/tags/tag/tag.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePage, pathMatch: 'full' },
      {
        path: 'games',
        children: [
          {
            path: '',
            component: GamesComponent,
            pathMatch: 'full',
          },
          { path: ':slug', component: GameDetailsComponent },
        ],
      },
      {
        path: 'platforms',
        children: [
          { path: '', component: PlatformsComponent, pathMatch: 'full' },
          { path: ':slug', component: PlatformComponent },
        ],
      },
      {
        path: 'genres',
        children: [
          { path: '', component: GenresComponent, pathMatch: 'full' },
          { path: ':slug', component: GenreComponent },
        ],
      },
      {
        path: 'tags',
        children: [
          { path: '', component: TagsComponent, pathMatch: 'full' },
          { path: ':slug', component: TagComponent },
        ],
      },
      {
        path: 'developers',
        children: [
          { path: '', component: DevelopersComponent, pathMatch: 'full' },
          { path: ':slug', component: DeveloperComponent },
        ],
      },
      {
        path: 'publishers',
        children: [
          { path: '', component: PublishersComponent, pathMatch: 'full' },
          { path: ':slug', component: PublisherComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
