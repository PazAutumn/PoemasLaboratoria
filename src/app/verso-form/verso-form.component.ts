import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verso-form',
  templateUrl: './verso-form.component.html',
  styleUrls: ['./verso-form.component.css']
})
export class VersoFormComponent implements OnInit {
  versoForm = new FormGroup({
    jugador : new FormControl(),
    contenido : new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }

}
