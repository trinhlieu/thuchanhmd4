import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../book.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book?: any
  id?: any

  constructor(private router2: ActivatedRoute,
              private BooksService: BookService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.router2.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id')
      this.BooksService.getById(this.id).subscribe(data => {
        this.book = data
        console.log(this.book)
      })
    })
  }

}
