import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-buttons',
  templateUrl: './test-buttons.component.html',
  styleUrls: ['./test-buttons.component.scss']
})
export class TestButtonsComponent implements OnInit {

  public textInputNormal: string;
  public textInputSucces: string;
  public textInputDanger: string;

  constructor() {
    this.textInputNormal = 'Normal button';
    this.textInputSucces = 'Success button';
    this.textInputDanger = 'Danger button';
  }

  ngOnInit() {
  }

}
