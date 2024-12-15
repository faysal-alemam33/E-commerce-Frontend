import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new_component',
  templateUrl: './new_component.component.html',
  styleUrls: ['./new_component.component.css'],
//   template: `<h1>Hello Standalone!</h1>`,
  standalone: true,
//   imports: [CommonModule] // Import other modules/components here
})
export class new_component {}
