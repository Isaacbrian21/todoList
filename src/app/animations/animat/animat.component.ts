import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnimateService } from 'src/app/core/service/animate.service';


@Component({
  selector: 'app-animat',
  templateUrl: './animat.component.html',
  styleUrls: ['./animat.component.scss']
})
export class AnimatComponent implements OnInit {
  showSpinner = false;
  constructor(private spinnerService: AnimateService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
    this.showSpinner = (status === 'start');
    this.cdRef.detectChanges();
  });
}
}
