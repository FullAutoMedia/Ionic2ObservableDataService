import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/Rx";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import { DanceMove } from '../../models/dance-move';

@Injectable()
export class DanceMoveService {
  private _danceMoves: BehaviorSubject<Array<DanceMove>> = new BehaviorSubject([]);
  public danceMoves: Observable<Array<DanceMove>> = this._danceMoves.asObservable();
  private isLoaded = false;

  constructor() { 
    this.load();
  }

  add(move: DanceMove): Observable<DanceMove>
  {
    if (!move) { return; }

    //TODO: add backend service call here
    //e.g. let obs = this.backend.add(item);

    //simulate backend
    let newMove = new DanceMove(
      this._danceMoves.getValue().length,
      move.name
    );
    let obs = Observable.of(newMove);
    //end simulate backend

    obs.subscribe((addedMove) => {
      this._danceMoves.getValue().push(addedMove);
    });

    return obs;
  }

  delete(id: number): Observable<boolean> {
    if (!id) { return; }

    //TODO: add backend service call here
    //e.g. let obs = this.backend.delete(id);

    //simulate backend
    let obs = Observable.of(true);
    //end simulate backend

    obs.subscribe(wasDeleted => {
      if (wasDeleted) {
        let index = this._danceMoves.getValue().findIndex(move => move.id == id);
        if (index >= 0) { this._danceMoves.getValue().splice(index, 1); }
      }
    });

    return obs;
  }

  diagnostic() {
    console.log("diagnostic() danceMoves: " + JSON.stringify(this._danceMoves.getValue));    
  }

  load() {
    let obs: Observable<Array<DanceMove>>;

    if (this.isLoaded) {
      obs = this.danceMoves;
    }
    else {
      //TODO: add backend service call here

      //simulate backend
      let initialMoves: Array<DanceMove> = [
        new DanceMove(1, "Cabbage Patch")
      ];
      obs = Observable.of(initialMoves);
      //end simulate backend

      obs.subscribe(returnedMoves => {
        this._danceMoves.next(returnedMoves);
        this.isLoaded = true;
      });      
    }
 
    return obs;
  }

  update(move: DanceMove) : Observable<DanceMove> {
    if (!move) { return; }

    //TODO: add backend service call here
    //e.g. let obs = this.backend.update(item);

    //simulate backend
    let obs = Observable.of(move);
    //end simulate backend

    obs.subscribe(updatedMove => {
      let index = this._danceMoves.getValue().findIndex(currentMove => currentMove.id == updatedMove.id);
      this._danceMoves.getValue()[index] = updatedMove;
    });

    return obs;
  }
}

