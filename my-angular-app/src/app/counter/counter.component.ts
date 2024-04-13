import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.count++;
    this.emitCountChange();
  }

  decrement() {
    this.count--;
    this.emitCountChange();
  }

  private emitCountChange() {
    this.countChange.emit(this.count);
  }
}
