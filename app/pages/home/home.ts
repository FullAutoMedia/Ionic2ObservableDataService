import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import { DanceMove } from '../../models/dance-move';
import { DanceMoveService } from '../../providers/dance-move-service/dance-move-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [DanceMoveService]
})
export class HomePage {
  moves: Observable<Array<DanceMove>>;

  constructor(private navCtrl: NavController,
    private svc: DanceMoveService) { }

  ngOnInit() {
    this.moves = this.svc.danceMoves;
  }

  public onAddClick(name: string) {
    let move = new DanceMove(null, name);
    this.svc.add(move);
  }

  public onDeleteClick(id: number) {
    this.svc.delete(id);
  }

  public onUpdateClick(move: DanceMove) {
    move.name = move.name + Date();
    this.svc.update(move);
  }
}
