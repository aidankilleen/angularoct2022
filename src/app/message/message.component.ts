import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message',
  template: `
    <div (click)="onClick()">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <div *ngIf="read">Read</div>
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() title = "Test Message";
  @Input() text = "This is a test message";
  read = false;

  onClick() {
    // alert("you clicked the message");
    this.read = !this.read;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
