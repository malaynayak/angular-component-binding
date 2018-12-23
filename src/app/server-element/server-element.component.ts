import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // View encapsulation
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // Decorator to expose element to another component(with Alias).
  @Input('srvElement') element: {type: string, name: string, content: string};

  @ViewChild('heading') header: ElementRef;

  // Decorator to get reference inside ng-content
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("Constructor Called");
  }

  // Called after a bound input property changes.
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit Called");
  }

  // Called during every change detection run.
  ngDoCheck() {
    console.log("ngDoCheck Called");
  }

  // Called after content (ng-content) has been projected into view.
  ngAfterContentInit() {
    console.log("ngAfterContentInit Called");
    console.log("Paragraph is: " + this.paragraph.nativeElement.textContent);
  }

  // Called every time the projected content has been checked.
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called");
  }

  // Called after the component’s view (and child views) has been initialized.
  ngAfterViewInit() {
    console.log("ngAfterViewInit Called");
    console.log("Heading is: " + this.header.nativeElement.textContent);
  }

  // Called every time the view (and child views) have been checked.
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called");
  }

  // Called once the component is about to be destroyed.
  ngOnDestroy() {
    console.log("ngOnDestroy Called");
  }

}
