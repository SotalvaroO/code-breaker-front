import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClick(){
    this.router.navigate(['/newGame'])
  }

}
