import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../models/member';
import { MemberService } from '../../services/memberService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss'
})

export class MemberDetailsComponent implements OnInit {
  member!: Member; 

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService) 
  {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const memberId = params['id'];

      this.memberService.getMemberById(memberId).subscribe(member => {
        this.member = member;
      });
    });
  }
}