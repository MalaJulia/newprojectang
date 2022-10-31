import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment, IPost} from "../interfaces";
import {urls} from "../config";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments)
  }
  getById(id: number):Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(`${urls.comments}/${id}`)
  }
}
