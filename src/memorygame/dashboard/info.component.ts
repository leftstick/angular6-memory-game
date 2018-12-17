import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() title: string
  @Input() text: string
}
