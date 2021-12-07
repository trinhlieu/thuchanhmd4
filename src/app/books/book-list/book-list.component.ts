import { Component, OnInit } from '@angular/core';
import {BookService} from "../../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bookService.getAllBook().subscribe(res => {
      console.log(res)
      this.books = res;
    })
  }

  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe(res => {
      alert('Xóa thành công')
        this.getAll();
    })
  }
}
