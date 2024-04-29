import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  // func: string =  + 100';
  currentValue: number = 0;
  calNumber: string = 'noValue';
  funcType: string = 'noFunction';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: string) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type === 'function') {
      this.onFunctionClic(val);
    }
    console.log(val, type);
  }
  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.currentValue = parseFloat(this.calNumber);
  }
  onFunctionClic(val: string) {
    if (val == 'Clear') {
      this.clearAll();
    } else if (this.funcType === 'noFunction') {
      this.firstNumber = this.currentValue;
      this.currentValue = 0;
      this.calNumber = 'noValue';
      this.funcType = val;
      console.log('done', this.funcType);
    } else if (this.funcType !== 'noFunction') {
      this.secondNumber = this.currentValue;
      this.valueCalculator(val);
      console.log(this.firstNumber, this.secondNumber);
    }
  }
  valueCalculator(val: string) {
    if (this.funcType == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcType == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcType == '*') {
      const Total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcType == '%') {
      const Total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(Total, val);
    }
    if (this.funcType == '/') {
      const Total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(Total, val);
    }
  }
  totalAssignValues(Total: number, val: string) {
    this.currentValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcType = val;
    if (val == '=') {
      this.onEqual();
    }
  }
  onEqual() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcType = 'noFunction';
    this.calNumber = 'noValue';
  }
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.currentValue = 0;
    this.funcType = 'noFunction';
    this.calNumber = 'noValue';
  }
}
