import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent {
  //Will be receiving properties an input form any other component calling this component
  @Input() pageNumber?: number;
  @Input() pageSize?: number;
  @Input() totalCount?: number;

}
