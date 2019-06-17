import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.scss']
})
export class UserPictureComponent implements OnInit {

  private static DEFAULT_PICTURE = 'assets/images/unknown_user.png'; 

  @Input() user: User;

  pictureURL: string = '';

  constructor() { }

  ngOnInit() {
    this.pictureURL = this.user.pictureURI || this.getPictureFromCDN();
  }

  getPictureFromCDN(): string {
    if (!environment.profilePictureCDN || environment.profilePictureCDN === '') {
      return UserPictureComponent.DEFAULT_PICTURE;
    } else {
      return environment.profilePictureCDN.replace('{}', this.user.userID);
    }
  }

  fallbackToDefault() {
    this.pictureURL = UserPictureComponent.DEFAULT_PICTURE;
  }

}
