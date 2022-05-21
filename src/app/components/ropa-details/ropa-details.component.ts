import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ropa } from 'src/app/models/ropa/ropa';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-ropa-details',
  templateUrl: './ropa-details.component.html',
  styleUrls: ['./ropa-details.component.css']
})
export class RopaDetailsComponent implements OnInit {

  id!: String;
  ropa?: Ropa;

  constructor(private ropaService: RopaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ropaService.getIdRopa(this.id).subscribe((data: Ropa) => {
      this.ropa = data;
    });
  }
}
