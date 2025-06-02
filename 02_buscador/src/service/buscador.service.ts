import { Injectable } from '@nestjs/common';
import { Item } from 'src/model/Item';

@Injectable()
export class BuscadorService {
  repositorio:Item[]=[new Item("http://www.fnac.com","libros","libros de todo tipo"),
    new Item("http://www.game.es","juegos","juegos varios"),
    new Item("http://www.retro.com","juegos","juegos retro"),
    new Item("http://www.casadellibro.es","libros","libros en cualquier idioma"),
    new Item("http://www.mytravel","viajes","viajes por todo el mundo")
  ];

  buscar(tematica:string):Item[]{
    return this.repositorio.filter(it=>it.tematica==tematica);
  }
  alta(item:Item):void{
    this.repositorio.push(item);
  }
}
