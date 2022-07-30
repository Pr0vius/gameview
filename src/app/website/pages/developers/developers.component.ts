import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { APIGetGamesParams } from 'src/app/interfaces/api';
import { Developer } from 'src/app/interfaces/developer';
import { DeveloperService } from 'src/app/services/developer/developer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
})
export class DevelopersComponent implements OnInit {
  devs: Developer[] = [];
  querys: APIGetGamesParams = {
    page: 1,
  };
  constructor(
    private title: Title,
    private developerService: DeveloperService,
    private route: ActivatedRoute
  ) {
    this.title.setTitle(`Developers - ${environment.app.title}`);
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((params) => {
          const page = params.get('page');
          if (page) {
            this.querys.page = Number(page);
          }
          return this.developerService.getDevs({
            page_size: 16,
            page: this.querys.page,
          });
        })
      )
      .subscribe((data) => (this.devs = data.results));
  }
}
