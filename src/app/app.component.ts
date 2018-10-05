import { Component } from '@angular/core';
import { UploaderService } from './uploader.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-request-options-args';

  constructor(private uploaderService: UploaderService) { }

  uploadImage() {
    this.uploaderService
      .uploadImage({ /* pretend that this is an image */ })
      .subscribe(event => {
        /*
         * This will print something like: {type: 1, loaded: 0}
         */
        console.log(event);
        /*
         * - Remember to cast the response type to its enum type: HttpEventType
         * - This will identify the event correctly
         */
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            console.log(`Value of HttpEventType.DownloadProgress is: ${event.type}`);
            break;
          case HttpEventType.UploadProgress:
            console.log(`Value of HttpEventType.DownloadProgress is: ${event.type}`);
            break;
          default:
            console.log(`Value of some other event is: ${event.type}`);
            break;
        }
      });
  }
}
