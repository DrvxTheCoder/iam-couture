import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit{

  clientForm!: FormGroup;
  clients: Client = new Client;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router) {}

    ngOnInit() {
      this.clientForm = this.formBuilder.group({
        prenomClient: ['', Validators.required],
        nomClient: ['', Validators.required],
        cniClient: ['', Validators.required],
        adresse: ['', Validators.required],
        sexe: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        // Add more form fields and validations as needed
      });
    }

    onSubmit() {
      if (this.clientForm.invalid) {
        return;
      }
  
      const formData = this.clientForm.value;
      this.clientService.createClient(formData).subscribe(
        response => {
          // Handle the response from the backend
          console.log(response);
          window.alert('Client crée avec succès!');
        },
        error => {
          // Handle any errors from the backend
          console.error(error);
        }
      );
    }

}

