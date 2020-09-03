import { Component, OnInit } from '@angular/core';
import { Criteria } from '../criteriaModel';
import { ServicesService } from '../services.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { studentInfo } from '../criteria/model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  constructor(private dataService: ServicesService) { }

  ngOnInit() {
    return this.dataService.getData().subscribe(data => {
      // console.log(data)
      this.criteriaList = data
      data.forEach(per => {
        this.percentList.push(per.percentage)
        this.total();
      });
      // console.log(this.percentList)
    })
  }

  public isShow = false;
  public crit: Criteria;
  public criteria: string;
  public percentage: number;
  public editCriteria: string;
  public editPercentage: number;
  public editid: number;
  public Total: number;
  public edited = false;
  public name: string;
  public event: string;
  public tempEvent: string;
  public tempName: string;

  editField: string;
  criteriaList: Array<Criteria> = [];
  percentList: Array<number> = [];

  // awaitingPersonList: Array<any> = [];

  updateList(data) {
    this.edited = true;
    this.editid = data.id;
    this.editCriteria = data.criteria;
    this.editPercentage = data.percentage;

    this.crit = {
      id: this.editid,
      criteria: this.editCriteria,
      percentage: this.editPercentage
    }
  }


  remove(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.dataService.deleteData(id).subscribe(data1 => this.criteriaList.splice(this.criteriaList.indexOf(id), 1));

        this.percentList.splice(this.percentList.indexOf(id), 1);
        this.total();
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    // console.log(this.percentList.indexOf(id))
  }

  public sum: number = 0;
  total() {
    this.Total = this.percentList.reduce(function (acc, val) { return acc + val; }, 0)
    // console.log(this.percentList.reduce(function (acc, val) { return acc + val; }, 0))
  }

  add(addForm) {
    if (this.edited) {
      this.criteriaList.forEach(element => {
        if (element.id == this.editid) {
          element.criteria = this.editCriteria;
          element.percentage = this.editPercentage;

          // this.dataService.updateData(element);
          this.percentList.splice(this.percentList.indexOf(element.id), 1)
          this.percentList.push(this.editPercentage);
          // console.log(this.percentList)
          this.total();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Successfully Updated!',
          })
          // console.log(element)
        }
        // this.dataService.updateData(element);
      });
    } else {
      this.crit = {
        id: this.criteriaList[this.criteriaList.length - 1].id + 1,
        criteria: this.criteria,
        percentage: this.percentage
      };
      this.dataService.postData(this.crit).subscribe(data1 => this.criteriaList.push(this.crit));

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully Added!',
      })
      this.percentList.push(this.percentage);
      console.log(this.percentList)

      addForm.form.reset();

    }

    // this.criteriaList.push(this.crit);



    // console.log(this.percentList);
    // console.log(sum(this.percentList));

    // console.log(this.criteriaList);
    // this.criteriaList[this.criteriaList.length - 1].id + 1,
  }

  startJudge() {
    this.tempName = this.name;
    this.tempEvent = this.event;
  }
}





