import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APIService } from '../api.service';
import { MatDialog } from '@angular/material';
import { BlogImageComponent } from './blog-image/blog-image.component';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  constructor(public translate: TranslateService, public api: APIService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(image: string): void {
    const dialogRef = this.dialog.open(BlogImageComponent, {
      width: '80%',
      data: image
    });
  }
}
