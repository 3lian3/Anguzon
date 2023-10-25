import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
