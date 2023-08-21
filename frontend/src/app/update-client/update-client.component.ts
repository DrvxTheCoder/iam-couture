import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  updateclientForm!: FormGroup;
  client: Client = new Client;
  existingClient: Client | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam !== null){
      const updateId = parseInt(idParam);
      this.clientService.getClientById(updateId).subscribe(
        response => {
          this.existingClient = response;
          this.updateclientForm.patchValue({
            prenomClient: this.existingClient.prenomClient,
            nomClient: this.existingClient.nomClient,
            cniClient: this.existingClient.cniClient,
            adresse: this.existingClient.adresse,
            email: this.existingClient.email,
            sexe: this.existingClient.sexe, // Set the sex form control value
            // Other form fields...
          });
        },
        error => {
          console.error(error);
        }
      );
    }else{
      this.router.navigate(['/clients']);
    }
    this.updateclientForm = this.formBuilder.group({
      prenomClient: ['', Validators.required],
      nomClient: ['', Validators.required],
      cniClient: ['', Validators.required],
      adresse: ['', Validators.required],
      sexe: [''],
      email: ['', [Validators.required, Validators.email]],
      // Add more form fields and validations as needed
    });

  }

  onSubmit() {
    if (this.updateclientForm.invalid) {
      return;
    }

    const formData = this.updateclientForm.value;
    const idUpdate = this.route.snapshot.paramMap.get('id');
    if (idUpdate !== null){
      const clientId = +idUpdate;
      this.clientService.updateClient(clientId, formData).subscribe(
        response => {
          // Handle the response from the backend
          console.log(response);
          window.alert('Client a été modifié avec succès!');
        },
        error => {
          // Handle any errors from the backend
          console.error(error);
        }
      );
    }
  }
  voirClient(){
    const idclient = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['client-details', idclient]);
  }
}
