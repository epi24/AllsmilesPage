import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modialService: NgbModal) {
  }

  public open(modal:any): void{
    this.modialService.open(modal);
  }
  title = 'untitled';
}
