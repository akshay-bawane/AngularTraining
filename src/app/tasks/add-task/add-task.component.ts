import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<boolean>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancelTask() {
    this.cancel.emit(false);
  }
}
