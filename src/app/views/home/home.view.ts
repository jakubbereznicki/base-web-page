import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ma-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
})
export class HomeView implements OnInit, OnDestroy {
  constructor(
    protected route: ActivatedRoute,
    protected cd: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
