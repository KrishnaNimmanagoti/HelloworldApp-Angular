import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HELLO-WORLD';
  imgUrl="../assets/BridgeLabz-Logo.jpg"
  url = "https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
