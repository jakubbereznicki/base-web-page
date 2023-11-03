import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ma-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  constructor(
    protected cd: ChangeDetectorRef,
    protected router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
