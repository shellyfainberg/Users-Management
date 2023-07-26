import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class RestutilsService {
  constructor(private http: HttpClient) {}

  getAllData(url: string) {
    return this.http.get<any>(url);
  }
  getData(url: string, id: string) {
    return this.http.get<any>(`${url}/${id}`);
  }
  getTasks(url: string, id: any) {
    return this.http.get<any>(`${url}/${id}/tasks`);
  }
  createItem(url: string, obj: any) {
    return this.http.post(`${url}`, obj);
  }
  createTask(url: string, id: any, obj: any) {
    return this.http.post(`${url}/${id}`, obj);
  }
  createPost(url: string, id: any, obj: any) {
    return this.http.post(`${url}/${id}/post`, obj);
  }

  updateData(url: string, id: any, obj: any) {
    return this.http.put<any>(`${url}/${id}`, obj);
  }
  completedData(url: string, UserId: any, taskId: any, obj: any) {
    return this.http.put<any>(`${url}/${UserId}/tasks/${taskId}`, obj);
  }
  deleteData(url: string, id: any) {
    return this.http.delete<any>(`${url}/${id}`);
  }
}
