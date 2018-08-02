import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  serverElements = [{type:'server',name:'Test Server',content:'Just to test the setup'},{type:'blueprint',name:'Test Server',content:'Just to test the setup'}]
  
  OnServerAdded(serverData:{serverName:string,content:string}) 
  {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.content,
    });
  }

  OnBlueprintAdded(serverData:{serverName:string,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.content,
    });
  }
}
