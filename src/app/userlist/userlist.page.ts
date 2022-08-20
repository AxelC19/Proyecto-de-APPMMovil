import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit { 
  
  constructor(private http:HttpClient) { }
  api: string ='https://rickandmortyapi.com/api/character';
  pagina2:any=[];
  characters:any =[];
  

  /*para que cargue el inicio*/
  ngOnInit() {
     this.http.get<any>(this.api)
     .subscribe(res=>{
      console.log(res);
      this.characters=res.results;            
     })                   
     
  }

}
