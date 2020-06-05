import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Response} from "@angular/http";

@Injectable()
export class ProductService {

  private _albumUrl: string;

  constructor(private _http: Http) {
    this._albumUrl = "../assets/albumjson"; 
   }

  getAlbum(id: number) {

  }

}
