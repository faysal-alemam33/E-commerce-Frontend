import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { new_component } from "./new_component/new_component.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, new_component, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_1';
}
