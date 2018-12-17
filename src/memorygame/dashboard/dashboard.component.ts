import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @select() remains$: Observable<number>
  @select() highestSpeed$: Observable<number>
}
