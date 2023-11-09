import { Component, OnInit } from '@angular/core';
import { HomeThreeBoxesData } from '../home.mock.data';
import { ApiHomeThreeBoxesData } from '../home.model';

@Component({
  selector: 'app-home-three-boxes',
  templateUrl: './home-three-boxes.component.html',
  styleUrls: ['./home-three-boxes.component.scss']
})
export class HomeThreeBoxesComponent implements OnInit {
  data!: ApiHomeThreeBoxesData;

  ngOnInit() {
    this.data = HomeThreeBoxesData;
  }
}
