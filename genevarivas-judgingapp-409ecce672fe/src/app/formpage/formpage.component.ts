import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { studentInfo } from '../criteria/model'

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss']
})
export class FormpageComponent implements OnInit {

  @Input() received: Array<studentInfo>
  @Input() finalData: Array<any>
  @Output() toChild = new EventEmitter();

  elements: any = [];

  headElements = ['Contender Name', 'Judge 1', 'Judge 2', 'Judge 3', 'Judge 4', 'Judge 5', 'Final Score', 'Rank'];



  constructor() { }

  ngOnInit() {
  }

  swalOnFinal(){
    Swal.fire({
      title: 'Congratulations Everyone for doing great!!',
      width: 600,
      padding: '3em',
      // background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://media0.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif")
        left top
        no-repeat
      `
    })
  }
}



