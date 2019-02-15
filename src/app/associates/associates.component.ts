import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.css']
})
export class AssociatesComponent implements OnInit {
  imgags: string[];

  public carouselBannerItems: Array<any> = [];
  public carouselBanner: NgxCarousel;

  public carouselTileItems: Array<any> = [];
  public carouselTile: NgxCarousel;

  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NgxCarousel;

  public carouselTileTwoItems: Array<any> = [];
  public carouselTileTwo: NgxCarousel;

  constructor() {}

  ngOnInit() {
    this.imgags = [
      'assets/images/prayan.png',
      'assets/images/prayan-1.png',
      'assets/images/prayan-2.png',
      'assets/images/prayan-3.png',
      'assets/images/prayan.png',
      'assets/images/prayan-1.png',
      'assets/images/prayan-2.png',
      'assets/images/prayan-3.png',
      'assets/images/prayan.png',
      'assets/images/prayan-1.png',
      'assets/images/prayan-2.png',
      'assets/images/prayan-3.png',
      'assets/images/prayan.png',
      'assets/images/prayan-1.png',
      'assets/images/prayan-2.png',
      'assets/images/prayan-3.png'

    ];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 4, all: 0 },
      speed: 1000,
      interval: 3000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 2,
      touch: true,
      loop: true
    };

    this.carouselTileLoad();
  }

  public carouselTileLoad() {
    const len = this.carouselTileItems.length;
    if (len <= 10) {
      for (let i = len; i < len + 4.5; i++) {
        this.carouselTileItems.push(
          this.imgags[i]
        );
      }
    }
  }

}
