import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Personnage } from 'src/shared/interfaces/personnage';
import { PersonnageService } from 'src/shared/services/personnage.service';

@Component({
  selector: 'app-personnage-list',
  templateUrl: './personnage-list.component.html',
  styleUrls: ['./personnage-list.component.scss']
})
export class PersonnageListComponent implements OnInit {

  @Input() public personnages: Personnage[] | null = null;
  

  constructor(private personnageService :PersonnageService, private activatedRoute : ActivatedRoute) { }

  
  ngOnInit(): void {
  
  
    
  
}

  public deleteOne(id : number , index : number){
    console.log(id)
     
        this.personnageService.deletePersonnage(id , index).subscribe();

      
  }
}
