import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Tag } from 'src/app/interfaces/tag';
import { TagsService } from 'src/app/services/tags/tags.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];
  subscription!: Subscription;
  page: number = 1;
  loading: boolean = false;
  constructor(private title: Title, private tagService: TagsService) {
    this.title.setTitle(`Tags - ${environment.app.title}`);
  }

  ngOnInit(): void {
    this.subscription = this.loadTags();
  }
  loadMore() {
    this.subscription.unsubscribe();
    this.subscription = this.loadTags();
  }

  private loadTags() {
    this.loading = true;
    return this.tagService
      .getAll({ page_size: 20, page: this.page })
      .subscribe((data) => {
        this.tags.push(...data.results);
        this.page++;
        this.loading = false;
      });
  }
}
