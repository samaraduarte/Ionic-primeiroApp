import { Component, OnInit } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigosArray = [
    {nome: 'Ana', idade: 22, nivelAmizade: 3},
    {nome: 'Amanda', idade: 23, nivelAmizade: 3},
    {nome: 'Luiza', idade: 24, nivelAmizade: 2},
    {nome: 'Carlos', idade: 22, nivelAmizade: 4},
    {nome: 'Joao', idade: 21, nivelAmizade: 1},
    {nome: 'Pedro', idade: 23, nivelAmizade: 2},
    {nome: 'Ana Luz', idade: 45, nivelAmizade: 5},
  ]
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async ativarAction(nome: string) {
    const buttons = [
      { text: 'Deletar', role: 'destructive', handler: () => {this.deletaAmigo(nome)}},
      { text: 'Editar'},
      { text: 'Cancelar', role: 'cancel'}
    ]
    const actionSheet = await this.actionSheetController.create({
      header: 'Ações',
      buttons
    });
    await actionSheet.present();
  }
  deletaAmigo(nome: string){
    this.amigosArray.forEach((item, index) => {
      if(item.nome === nome) this.amigosArray.splice(index, 1);
    })
  }
}
