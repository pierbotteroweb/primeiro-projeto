import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private CursoService:CursoService) { 
    this.nomePortal = "http://loiane.training"

    this.cursos = this.CursoService.getCursos()

    //var servico = new CursoService()
  }

  ngOnInit() {
  }

}
