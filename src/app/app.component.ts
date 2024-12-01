import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cal';
  StringToBeEvaluated:string = ""; //"3+1"

  takeInput(num:string) {
    //"3+" + "1" = "3+1"
    this.StringToBeEvaluated = this.StringToBeEvaluated + num;
  }

  evaluateString() {
    if (this.StringToBeEvaluated != "") {
      this.StringToBeEvaluated = eval(this.StringToBeEvaluated);
    }
  }

  clearString() {
    this.StringToBeEvaluated = "";
  }

}
