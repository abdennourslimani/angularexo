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

  @Input() public personnages: Personnage[] | null = null  ;
  @Input() public filtrepersonnages: Personnage[] | null = null  ; 

  public filteractif(actif : boolean){
    this.filtrepersonnages = this.personnages!.filter(pers => pers.active === actif)
      console.log(this.filtrepersonnages);
      
    
  }


 public nofilter(){
       this.filtrepersonnages= this.personnages  ;
   }

  constructor(private personnageService :PersonnageService, private activatedRoute : ActivatedRoute) {

  }

  
  ngOnInit(): void {


    console.log(this.personnages)
  
    
  
}

  public deleteOne(id : number , index : number){
    console.log(id)
     
        this.personnageService.deletePersonnage(id , index).subscribe();
        this.personnageService.fetchPersonnage().subscribe()

      
  }
}
