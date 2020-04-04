import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-style',
  templateUrl: './intro-style.component.html',
  styleUrls: ['./intro-style.component.css']
})
export class IntroStyleComponent implements OnInit {

  toggleFlag = false;
  loopCount=0;
  messages=[];
  constructor() { }

  ngOnInit() {
  }

  toggleInput()
  {
    this.toggleFlag =  !this.toggleFlag;
  
    this.loopCount++;
    this.messages.push(this.loopCount);
  }

  getStyle()
  {
    console.log(this.toggleFlag);
    if (this.toggleFlag)
    {
      return '.green';
    }
    else
    {
      return '.red';
    }
  }

}
