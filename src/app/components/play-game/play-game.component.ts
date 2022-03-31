import { Component, OnInit } from '@angular/core';
import { CodeBreakServiceService } from '../../services/code-break-service.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
})
export class PlayGameComponent implements OnInit {
  public response;

  gameForm: FormGroup;

  constructor(private codeService: CodeBreakServiceService, private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      number: [''],
    })
  }

  ngOnInit(): void {
    this.gameForm.setValue({
      result: "",
      counter: 0
    })
  }

  public playGame() {
    this.codeService.playCodeBreaker(this.gameForm.value.number).subscribe((game) => {
      this.response = game.result;
      console.log(this.response);
    });
  }
}
