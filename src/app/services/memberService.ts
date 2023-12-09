import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { HttpClient } from '@angular/common/http';
import { Member } from '../models/member';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  getMembers(): Observable<Member[]> {
    // return this.get<Member[]>('members');
    return of(getFakeMembers());
  }

  getMemberById(id: number): Observable<Member> {
    // return this.get<Member>(`members/${id}`);
    return of(getFakeMember(id));
  }

  addMember(member: Member): Observable<Member> {
    return this.post<Member>('members', member);
  }

  updateMember(member: Member): Observable<Member> {
    return this.put<Member>(`members/${member.id}`, member);
  }

  deleteMember(id: number): Observable<any> {
    return this.delete<any>(`members/${id}`);
  }
}

function getFakeMember(id: number) : Member{
  const fakeMembers = getFakeMembers();
  const member = fakeMembers.find((m) => m.id === id);
  return member as Member;
}


function getFakeMembers() : Member[]{
  const fakeMembers: Member[] = [];
  for (let i = 1; i <= 10; i++) {
    const fakeMember: Member = {
      id: i,
      name: `Member ${i}`,
      age: Math.floor(Math.random() * 40) + 20, // Génère un âge entre 20 et 60 ans
    };
  
    fakeMembers.push(fakeMember);
  }
  return fakeMembers;
}



