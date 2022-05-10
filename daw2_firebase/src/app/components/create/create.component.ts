import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public userForm: FormGroup;

  constructor(public userService: UserService, public formBuilder: FormBuilder, public router: Router) {
    this.userForm = this.formBuilder.group({
      userNickname: [''],
      userRealname: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['']);
  }

}
