import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.scss']
})
export class UserPictureComponent implements OnInit {

  @Input() user: User;

  pictureURL: string = '';

  constructor() { }

  ngOnInit() {
    this.pictureURL = this.user.pictureURI || `${environment.profilePictureCDN}/${this.user.userID}.png`;
  }

  fallbackToDefault() {
    this.pictureURL = 'assets/images/unknown_user.png'
  }

}
