import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Mesure } from '../mesure';
import { ClientService } from '../client.service';
import { MesureService } from '../mesure.service';
import { Router, ActivatedRoute } from '@angular/router';
import { faEdit, faTrashCan, faClipboardList, faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {

  client: Client = new Client;
  mesure: Mesure = new Mesure;
  activeTab: string = 'home';


  constructor(private clientService: ClientService, private mesureService: MesureService,
    private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam !== null) {
        const clientId = +idParam;
    
        // Fetch the client details
        this.clientService.getClientById(clientId).subscribe(
          response => {
            this.client = response;
          },
          error => {
            if (error.status === 404) {
              this.router.navigate(['/clients']);
            }
          }
        );
    
        // Fetch the measurements associated with the client
        this.mesureService.getClientMesureById(clientId).subscribe(
          response => {
            this.mesure = response[0]; // Access the first measurement in the array
          },
          error => {
            if (error.status === 404) {
              // Handle the case when no measurement is found
              this.mesure = new Mesure(); // Initialize an empty Mesure object
            }
          }
        );
      } else {
        this.router.navigate(['/clients']);
      }
    }
    
    
    switchTab(tab: string): void {
      this.activeTab = tab;
    }
    updateClient(id: number){
      this.router.navigate(['update-client', id]);
    }
    updateClientMesure(id: number){
      this.router.navigate(['update-mesure', id]);
    }

}
