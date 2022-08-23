import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = this.coursesService.list();
  displayedColumns = ['name', 'category'];


  constructor(
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
  }

}

// export class CoursesComponent implements OnInit {

//   courses: Course[] = []
//   displayedColumns = ['name', 'category'];

//   courseService: CoursesService;

//   constructor() {
//     this.courseService = new CoursesService();
//     this.courses = this.courseService.list();
//   }

//   ngOnInit(): void {
//   }

// }
