import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso-form',
  templateUrl: './verso-form.component.html',
  styleUrls: ['./verso-form.component.css']
})
export class VersoFormComponent implements OnInit {
  @Input() verso:Verso = new Verso();
  versoForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("Verso Form " + JSON.stringify(this.versoForm));
  }

  createForm(){
    this.versoForm = this.fb.group({
      jugador : [this.verso.nombreJugador, [Validators.required, Validators.minLength(4)]],
      contenido : [this.verso.contenido],
      indice:[0, Validators.min(0)]
    });
  }
}
