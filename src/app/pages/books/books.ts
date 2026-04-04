import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css',
})

export class Books implements OnInit {

  bookPageResponse? : PagedResponse<BookResponse>;

  constructor(private bookService: BookService){}

  ngOnInit(): void {
      this.bookService.getBooks(0,5).subscribe((response: PagedResponse<BookResponse>) => {
        this.bookPageResponse = response;
      });
  }

}
