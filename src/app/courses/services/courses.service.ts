import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  list(): Course[] {
    return [
      { _id: "asdasdad", name: "Angular", category: "FrontEnd" },
      { _id: "asdasdad", name: "Angular", category: "FrontEnd" },
      { _id: "asdasdad", name: "Angular", category: "FrontEnd" },
      { _id: "asdasdad", name: "Angular", category: "FrontEnd" },
    ];
  }
}
