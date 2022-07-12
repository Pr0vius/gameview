import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { HomePage } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'store', pathMatch: 'full' },
      {
        path: 'store',
        children: [
          { path: '', component: HomePage },
          { path: ':slug', component: GameDetailsComponent },
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
