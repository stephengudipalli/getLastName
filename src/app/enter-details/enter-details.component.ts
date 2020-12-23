import { Component, OnInit, Input } from '@angular/core';
import { LastNameService } from '../last-name.service';


@Component({
  selector: 'app-enter-details',
  templateUrl: './enter-details.component.html',
  styleUrls: ['./enter-details.component.css']
})
export class EnterDetailsComponent implements OnInit {

  public data;
  public lastName;
  constructor(private lastNameService: LastNameService) { }

  ngOnInit() {
  }

  getLastName() {
    this.lastNameService.getLastName().subscribe((data) => {
      console.log('data', data);
      this.data = data;
      this.lastName = this.data[0].username;
      let i = 0;
      const length = this.data.length;
      setInterval(() => {
        i = i + 1;
        if (length === i) {
          i = 0;
        }
        this.lastName = this.data[i].username;
      }, 500);

    }, (error) => {
      console.log('error', error);
    });
  }

}
