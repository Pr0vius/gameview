import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomePage } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { SearchComponent } from './components/layout/search/search.component';

@NgModule({
  declarations: [HomePage, LayoutComponent, SidebarComponent, GameDetailsComponent, SearchComponent],
  imports: [CommonModule, WebsiteRoutingModule, SharedModule],
})
export class WebsiteModule {}
