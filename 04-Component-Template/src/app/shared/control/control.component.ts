import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control'
  label = input.required<string>();

  //To get element details programatically
  private el = inject(ElementRef);

  // @HostListener('click') onClick(){
  //   console.log('click');
  // }



  onClick() {
    console.log('click');
    console.log(this.el);
  }
}
