import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { faEdit, faTrashCan, faClipboardList, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

  clients: Client[]= [];

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
      this.getClients();
  }

  private getClients(){
    this.clientService.getClientList().subscribe(data => {
      this.clients = data;
      console.log(this.clients)
    });
  }

  clientDetails(id: number){
    this.router.navigate(['client-details', id]);
  }

  updateClient(id: number){
    this.router.navigate(['update-client', id]);
  }

  confirmDelete(id: number){
    const confirmed = window.confirm('Etes-vous sur de vouloir supprimer ce client?');
    if (confirmed){
      this.clientService.deleteClient(id).subscribe( data => {
        console.log(data);
        this.getClients();
      })
    }

  }


}
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrashCan,faEdit,faClipboardList,faFilm);
  }
}
