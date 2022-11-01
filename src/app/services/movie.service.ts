import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page = 1): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/popular?&api_key=${environment.apiKey}&page=${page}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
