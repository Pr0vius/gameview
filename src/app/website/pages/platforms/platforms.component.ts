import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlatformWithGames } from 'src/app/interfaces/platform';
import { PlatformsService } from 'src/app/services/platforms/platforms.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss'],
})
export class PlatformsComponent implements OnInit {
  platforms: PlatformWithGames[] = [];
  constructor(private platformService: PlatformsService, private title: Title) {
    this.title.setTitle(`Platforms - ${env.app.title}`)
  }

  ngOnInit(): void {
    this.platformService.getPlatforms().subscribe((data) => {
      this.platforms = data.results;
      console.log(this.platforms);
    });
  }
}
