import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogingComponent } from "./components/login/loging.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guards';
}
