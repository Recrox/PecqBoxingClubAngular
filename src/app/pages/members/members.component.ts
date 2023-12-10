import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/memberService';
import { Member } from '../../models/member';
import { Router, RouterLink } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})

export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(
    private memberService: MemberService, 
    private router: Router,
    private dialog: MatDialog) {}

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

  deleteMember(member:Member){
    this.memberService.deleteMember(member.id).subscribe(() => {
      this.refreshMembers();
    });
  }

  showDetails(member: Member) {
    this.router.navigate(['/member', member.id]);
  }

  confirmDelete(member: Member) {
    this.confirmPopUp(member);
  }

  private confirmPopUp(member: Member) {
    // const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //   width: '250px',
    //   data: { memberData: member }, // Vous pouvez passer des données à la boîte de dialogue si nécessaire
    //   panelClass: 'custom-dialog-container',
    //   disableClose: true, // Empêche la fermeture de la boîte de dialogue par clic à l'extérieur
    //   backdropClass: 'custom-backdrop' // Ajoutez une classe pour personnaliser l'arrière-plan de la boîte de dialogue
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     // Si l'utilisateur a confirmé la suppression
    //     this.deleteMember(member);
    //   }
    // });

    const confirmed : boolean = confirm('Êtes-vous sûr de vouloir supprimer ce membre ?');
    if (confirmed) {
      this.deleteMember(member);
    }
  }
}