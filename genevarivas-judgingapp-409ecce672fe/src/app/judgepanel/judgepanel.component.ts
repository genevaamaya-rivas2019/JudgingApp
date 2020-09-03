import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Criteria } from '../criteriaModel';
import Swal from 'sweetalert2';
import { ServicesService } from '../services.service';
// import { summaryFileName } from '@angular/compiler/src/aot/util';
// import { log } from 'util';

@Component({
  selector: 'app-judgepanel',
  templateUrl: './judgepanel.component.html',
  styleUrls: ['./judgepanel.component.scss']
})
export class JudgepanelComponent implements OnInit {


  @Input() fname: string
  @Input() event1: string
  @Input() formData: Array<Criteria>
  @Output() childEvent = new EventEmitter();


  public finArray = [];

  public isShow = false;
  public array = []
  public allList: any[] = [];
  public crit: Criteria;
  public tempName: string;
  public name: string;
  public Total: number;
  public percentage1: number;
  public percentage2: number;
  public edited = false;
  public ngmodels: number[] = [];
  public index = 0
  constructor(private dataService: ServicesService) {
    // var i=1;
    // while(i<this.formData.length){
    //   this.ngmodels.push(i)
    //   i++
    // }
  }

  ngOnInit() {
    console.log(this.formData.length);
    console.log(this.ngmodels)
    this.total();
    console.log(this.Total)
  }



  // @Input() event : String;

  editField: string;
  criteriaList: Array<Criteria> = [];
  percentList: Array<number> = [];
  scoreList: Array<number> = [];

  remove(id: any) {
    // this.awaitingPersonList.push(this.criteriaList[id]);
    this.criteriaList.splice(id, 1);
  }

  public sum: number = 0;

  total() {
    this.Total = this.ngmodels.reduce(function (acc, val) { return acc + val; }, 0)
    // console.log(this.percentList.reduce(function (acc, val) { return acc + val; }, 0))  
  }

  add() {
    if (this.ngmodels[0] > this.formData[0].percentage || this.ngmodels[1] > this.formData[1].percentage || this.ngmodels[2] > this.formData[2].percentage || this.ngmodels[3] > this.formData[3].percentage) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Some of the score/s is greater than the value being set!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
    // else if (this.edited) {
    //   this.array[this.index] = { name: this.name, user: this.ngmodels, total: this.Total }
    // }
     else {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully Added!',
      })
      this.total();
      this.array.push({ name: this.name, user: [... this.ngmodels], total: this.Total })
      console.log("I am in else", this.array)
      this.tempName = this.name;
    }
    // }
    // console.log(this.Total)


    // this.allList.push(this.ngmodels);
    // console.log("All List:",this.allList);
  }

  editScore(i) {
    this.edited = true;
    this.index = i
  }

  final() {
    this.dataService.getScore().subscribe(data => {
      this.finArray = data;
      this.array.forEach(element => {
        this.finArray.push({ name: element.name, finScore: element.total })
      });
      console.log(data)
      console.log(this.finArray)
    });
  }



}