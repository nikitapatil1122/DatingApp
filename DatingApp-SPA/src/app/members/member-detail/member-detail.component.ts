import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  constructor(
    private alertify: AlertifyService,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  user: User;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() {
    this.route.data.subscribe(data => (
      this.user = data['user']
    ));

    this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          imagePercent: 100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }];

    this.galleryImages = this.getImages();
  }

  getImages()
  {
      const imgUrls = [];
      for (const photo of this.user.photos) {
        imgUrls.push({
          small: photo.url,
          medium: photo.url,
          big: photo.url,
          description: photo.description
        });
      }

      return imgUrls;
  }


  // loadMemberDetail() {
  //   this.userService.getUser(this.activeRoute.snapshot.params['id']).subscribe(
  //     (user) => {
  //       this.user = user;
  //     },
  //     (error) => {
  //       this.alertify.error(error);
  //     }
  //   );
  // }
}
