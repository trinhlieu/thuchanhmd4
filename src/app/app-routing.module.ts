import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./books/book-list/book-list.component";
import {BookCreateComponent} from "./books/book-create/book-create.component";
import {BookUpdateComponent} from "./books/book-update/book-update.component";

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/add',
    component: BookCreateComponent
  },
  {
    path: 'books/edit/:id',
    component: BookUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
