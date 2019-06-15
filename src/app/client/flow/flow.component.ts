import { Component, OnInit, Input } from '@angular/core';
import { Flow } from '../flow.model';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  @Input() flow: Flow;

  constructor() { }

  ngOnInit() {
  }

}
