import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from  '../animations/app.animation'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
  flyInOut(),
  expand()
  ]
})

export class AboutComponent implements OnInit {

  leaders: Leader[];
  leaderErrMess: string;

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
   this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders,
    errmess => this.leaderErrMess = <any>errmess.message);
  }

}