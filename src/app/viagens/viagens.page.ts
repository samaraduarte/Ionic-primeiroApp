import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  viagens = [
    {local: 'Rio de Janeiro', descricao: 'Cidade maravilhosa', data: '12-12-20', img: 'https://media.melhoresdestinos.com.br/2019/08/rio-de-janeiro-capa2019-01-820x430.jpg' },
    {local: 'Belo Horizonte', descricao: 'Capital mineira', data: '12-12-20', img: 'https://www.visiteobrasil.com.br/galerias/gal-belo-horizonte/680-080732-belo-horizonte-pracadaliberdadelicenca-dominio-publicogr.jpg' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
