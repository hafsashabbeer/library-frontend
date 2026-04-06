import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { PagedResponse } from '../../models/paged-response';
import { MemberResponse } from '../../models/member-response';

@Component({
  selector: 'app-members',
  imports: [CommonModule, RouterLink],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members implements OnInit {

  constructor(private memberService: MemberService, private cdr: ChangeDetectorRef) { }

  membersPagedResponse?: PagedResponse<MemberResponse>;
  currentPage: number = 0;
  pageSize: number = 5;

  ngOnInit(): void {
    this.loadMembers(this.currentPage, this.pageSize);
  }

  loadMembers(page: number, size: number): void{

    this.memberService.getMembers(page, size).subscribe((response: PagedResponse<MemberResponse>) => {
      this.membersPagedResponse = response;
      this.currentPage = response.number;
      this.pageSize = response.size;
      this.cdr.detectChanges();
    });
  }

  nextPage(): void {
    const totalPages = this.membersPagedResponse?.totalPages?? 0;
    if(this.currentPage < (totalPages -1)){
      this.loadMembers(this.currentPage + 1, this.pageSize);
    } else {
      alert("You are on the last page!");
    }
  }

  previousPage(): void {
    if(this.currentPage > 0){
      this.loadMembers(this.currentPage - 1, this.pageSize);
    } else {
      alert("You are on the first page!");
    }
  }
}
