import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Event emitters allows to add custom event
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    // // Via two way binding.
    // this.serverCreated.emit({
    //   serverName: this.newServerName,
    //   serverContent: this.newServerContent
    // });

    // Via view reference.
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

}
