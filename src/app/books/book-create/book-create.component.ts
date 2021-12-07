import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  formAddBook? : FormGroup

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })
  }

  submit() {
    let data = this.formAddBook?.value;
    this.bookService.createBook(data).subscribe(res => {
      this.router.navigate(['books'])
    })
  }
}
