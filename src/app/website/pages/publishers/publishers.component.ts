import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { APIGetGamesParams } from 'src/app/interfaces/api';
import { Publisher } from 'src/app/interfaces/publisher';
import { PublishersService } from 'src/app/services/publishers/publishers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss'],
})
export class PublishersComponent implements OnInit {
  publishers: Publisher[] = [];
  querys: APIGetGamesParams = {
    page: 1,
  };
  constructor(
    private title: Title,
    private publisherService: PublishersService,
    private route: ActivatedRoute
  ) {
    this.title.setTitle(`Publishers - ${environment.app.title}`);
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((params) => {
          const page = params.get('page');
          if (page) {
            this.querys.page = Number(page);
          }
          return this.publisherService.getDevs({
            page_size: 16,
            page: this.querys.page,
          });
        })
      )
      .subscribe((data) => (this.publishers = data.results));
  }
}
