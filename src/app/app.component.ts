import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HELLO-WORLD';
  imgUrl="../assets/BridgeLabz-Logo.jpg"

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }
}
