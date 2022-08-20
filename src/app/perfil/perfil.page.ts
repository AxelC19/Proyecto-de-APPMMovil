import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilId:string='';
  urlApiPersonaje: string='https://rickandmortyapi.com/api/character/';
  urlApiUbicacion: string= 'https://rickandmortyapi.com/api/location/';
  urlApiEpisodio: string='https://rickandmortyapi.com/api/episode/';
  personaje:any='';
  ubicacion:any='';
  episodio:any='';
  pagina2:any='';
  

  constructor(
    private activaterouter:ActivatedRoute,
    private  http:HttpClient
  ) { }

  ngOnInit() {
    this.perfilId= this.activaterouter.snapshot.paramMap.get('id');
    /*console.log(this.perfilId= this.activaterouter.snapshot.paramMap.get('id'));*/
    this.http.get(this.urlApiPersonaje + this.perfilId)
    .subscribe(res=>{             
      this.personaje= res      
      console.log(this.personaje);
    }  );
    this.http.get(this.urlApiUbicacion + this.perfilId)
    .subscribe(res=> this.ubicacion=res);

    this.http.get(this.urlApiEpisodio + this.perfilId)
    .subscribe(res=> this.episodio=res);

         
      
  }
   
   
}
