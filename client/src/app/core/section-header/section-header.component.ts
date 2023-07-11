import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  //making the service public makes it available on 
  //the html template
  constructor(public bcService: BreadcrumbService) {
    
  }

}
