import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Genre } from 'src/app/interfaces/genre';
import { GenresService } from 'src/app/services/genres/genres.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private title: Title, private genreService: GenresService) {
    this.title.setTitle(`Genres - ${environment.app.title}`);
  }

  ngOnInit(): void {
    this.genreService
      .getAll()
      .subscribe((data) => (this.genres = data.results));
  }
}
