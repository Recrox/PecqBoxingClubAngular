import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member'; // Importe également le modèle License
import { MemberService } from '../../services/memberService';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { License } from '../../models/license';

@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './member-form.component.html',
  styleUrl: './member-form.component.scss'
})



export class MemberFormComponent implements OnInit {
  member: Member = memberInit; // Initialise un membre vide avec une licence
  isEditMode = false; // Indicateur pour distinguer entre ajout et mise à jour

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.loadMember(params['id']);
      }
    });
  }

  loadMember(id: number): void {
    this.memberService.getMemberById(id).subscribe((data: Member) => {
      this.member = data;
    });
  }

  saveMember(): void {
    if (this.isEditMode) {
      this.memberService.updateMember(this.member).subscribe(() => {
        // Code pour redirection ou action après la mise à jour
      });
    } else {
      this.memberService.addMember(this.member).subscribe(() => {
        // Code pour redirection ou action après l'ajout
      });
    }
  }
}

const memberInit: Member = {
  id: 0,
  name: '',
  firstName: '',
  age: 0,
  license: {
    id: 0,
    startDate: new Date(),
    endDate: new Date()
  },
  balance: 0
};