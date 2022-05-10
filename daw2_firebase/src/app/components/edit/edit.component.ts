import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;
  userRef: any;

  constructor(public userService: UserService, public formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private router: Router) {
    this.editForm = this.formBuilder.group({
      userNickname: [''],
      userRealname: [''],
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(res => {
      this.userRef = res;
      this.editForm = this.formBuilder.group({
        userNickname: [this.userRef.userNickname],
        userRealname: [this.userRef.userRealname],
      });
    });
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['']);
  }

}
