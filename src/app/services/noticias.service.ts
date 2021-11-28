import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaToHeadLines } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient ) { }

  getTopHeadLine()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0ed6cc667d0f49de9e8dbca04e27aa03')
  }
}
