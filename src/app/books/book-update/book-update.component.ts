import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../book.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  formEditBook?: FormGroup

  id: any

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: ActivatedRoute,
              private router2: Router) {
  }

  ngOnInit(): void {
    this.formEditBook = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.bookService.getById(this.id).subscribe(res => {
      let data = res;
      this.formEditBook?.patchValue({
        title: data?.title,
        author: data?.author,
        description: data?.description
      })
    });
  }

  editBook() {
    const book = this.formEditBook?.value;
    const id = this.id;
    this.bookService.updateBook(id, book).subscribe(res => {
      this.router2.navigate(['books'])
    })
  }

}
