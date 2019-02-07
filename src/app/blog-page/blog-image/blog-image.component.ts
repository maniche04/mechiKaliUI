import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-blog-image',
  templateUrl: './blog-image.component.html',
  styleUrls: ['./blog-image.component.scss']
})
export class BlogImageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
