import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { RequestType, data } from './calculator/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Calculator';
  get heroData() {
    return data;
  }
  requestTypeId$!: Observable<any>;

  selectedImgId = 5;
  onSelectImg(v: any) {
    console.log(v);
  }
  get RequestType() {
    return RequestType;
  }
}
