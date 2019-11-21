import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'Hachico';
  petIMG = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3TZSNIwRpiHxL_x6z3X0WVawLOEYPImlwMlv6_UIkO3Sf3q07&s';

  constructor() {
  }

  updateName(name) {
    this.petName = name;
  }

  updateImg(img) {
    this.petIMG = img;
  }

  ngOnInit() {
  }

}
