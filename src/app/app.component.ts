import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  // @ts-ignore
  // tslint:disable-next-line:max-line-length
  studentRecords: object[] = [ {firstName: 'Sarabjit', lastName: 'Raina', programId: 23, programYear: 2, programCoop: 'yes', programInternship: 'yes' },
  {firstName: 'Ravneet', lastName: 'Raina', programId: 28, programYear: 3, programCoop: 'no', programInternship: 'no' },
    {firstName: 'Tavleen', lastName: 'Raina', programId: 34, programYear: 4, programCoop: 'yes', programInternship: 'no' },
    {firstName: 'Abhi', lastName: 'Awal', programId: 28, programYear: 2, programCoop: 'no', programInternship: 'no' }
    ];
  public title = 'Getting Details of a Person';
  public student: object;
  constructor() {
    this.selectStudent(0);
  }
  public selectStudent(index) {
    this.student = this.studentRecords[index];
  }
}
