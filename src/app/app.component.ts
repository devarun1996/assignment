import { Component, OnInit } from '@angular/core';
import { TimeService } from './time.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  date_time: any;

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    
    this.timeService.getTime().subscribe( time=>{
      this.date_time=time;
    })
  }
}
