import { Component, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnChanges {
  protected readonly title = signal('my-app');
  inputValue = 'Uday';
  private debounceTimeout?: ReturnType<typeof setTimeout>;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Simple changes are here', changes);
  }

  onInputDebounce(value: string) {
    clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(() => {
      console.log('User typed with debounce:', value);
    }, 300);
  }
}
