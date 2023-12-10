import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/memberService';
import { Member } from '../../models/member';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})

export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.refreshMembers();
  }

  refreshMembers() {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
    });
  }

  showAddMember() {
    // Redirection vers une page ou l'affichage d'un formulaire d'ajout
  }

  editMember(member: Member) {
    // Logique pour l'édition du membre
  }

  deleteMember(member: Member) {
    this.memberService.deleteMember(member.id).subscribe(() => {
      this.refreshMembers();
    });
  }

  showDetails(member: Member) {
    this.router.navigate(['/member', member.id]);
  }
}