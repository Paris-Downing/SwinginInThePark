import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle1 = true;
  toggle2 = false;
  toggle3 = false;
  toggle4= false;

  enableDisableRule(data: number) {
    switch (data) {
      case 2: 
        this.toggle1 = false;
        this.toggle2 = true;
        this.toggle3 = false;
        this.toggle4 = false;
        break;
      case 3:
        this.toggle1 = false;
        this.toggle2 = false;
        this.toggle3 = true;
        this.toggle4 = false;
        break;
      case 4: 
        this.toggle1 = false;
        this.toggle2 = false;
        this.toggle3 = false;
        this.toggle4 = true;
        break;
      default:
        this.toggle1 = true;
        this.toggle2 = false;
        this.toggle3 = false;
        this.toggle4 = false;
        break;
    }
  }
}
