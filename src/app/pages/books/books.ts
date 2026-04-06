import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookResponse } from '../../models/book-response';
import { PagedResponse } from '../../models/paged-response';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})

export class Books implements OnInit {

  bookPageResponse?: PagedResponse<BookResponse>;
  currentPage: number = 0;
  pageSize: number = 5;

  constructor(private bookService: BookService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadBooks(this.currentPage, this.pageSize);
  }

  loadBooks(page: number, size: number): void {
    this.bookService.getBooks(page, size).subscribe((response: PagedResponse<BookResponse>) => {
    this.bookPageResponse = response;
    this.currentPage = response.number;
    this.pageSize = response.size;

    this.cdr.detectChanges();
    });
  }

  nextPage(): void {
    const totalPages = this.bookPageResponse?.totalPages ?? 0;
    if (this.currentPage < (totalPages - 1)) {
      this.loadBooks(this.currentPage + 1, this.pageSize);
    } else {
      alert("You are on the last page!");
    }
  }

  previousPage(): void {  
    if (this.currentPage > 0) {
      this.loadBooks(this.currentPage - 1, this.pageSize);
    } else {
      alert("You are on the first page!");
    }
  }
}
