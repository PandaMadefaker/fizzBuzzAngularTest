import { Component } from '@angular/core';
import {timer} from 'rxjs';
import {stringify} from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: 'fizzbuzztest';
  public number: number;
  public value: string;
  public numberValue: {number: number, value: string} [];

  public start(): void {
    this.numberValue = [];
    for (let i = 1; i <= 100; i++) {
        timer(i * 500).subscribe(() => {
          this.number = i;
          if (i % 3 === 0 && i % 5 === 0) {
          this.value = 'FizzBuzz';
        } else if (i % 3 === 0) {
          this.value = 'Fizz';
        } else if (i % 5 === 0) {
          this.value = 'Buzz';
        } else {
          this.value = i.toString();
        }
          this.numberValue.push({number: i, value: this.value});
        });
    }
  }
}
