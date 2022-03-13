import { Component, OnInit } from '@angular/core';

@Component({
  //selector: `.app-servers`,
  selector:`app-servers`,
  //template or template URL needs to be present
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  public serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
