import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Users: User[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.Users = res.map((e) => {
        return {
          id: e.payload.doc.id, ...(e.payload.doc.data() as User)
        };
      });
    });
  }

  deleteRow = (user) => this.userService.deleteUser(user);
}
