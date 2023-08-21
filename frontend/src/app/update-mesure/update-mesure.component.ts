import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Client } from '../client';
import { Mesure } from '../mesure';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MesureService } from '../mesure.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-update-mesure',
  templateUrl: './update-mesure.component.html',
  styleUrls: ['./update-mesure.component.css']
})
export class UpdateMesureComponent implements OnInit {
  updateMesureForm!: FormGroup;
  client: Client = new Client;
  mesure: Mesure = new Mesure;
  existingMesure: Mesure | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private mesureService: MesureService
  
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam !== null){
      const updateId = parseInt(idParam);
      this.clientService.getClientById(updateId).subscribe(
        response => {
          this.client = response;
        },
        error => {
          if (error.status === 404) {
            this.router.navigate(['/clients']);
          }
        }
      );
      this.mesureService.getClientMesureById(updateId).subscribe(
        response => {
          this.existingMesure = response[0]; // Access the first measurement in the array
          this.updateMesureForm.patchValue({
            tete: this.existingMesure.tete,
            cou: this.existingMesure.cou,
            epaule: this.existingMesure.epaule,
            lbras: this.existingMesure.lbras,
            poitrine: this.existingMesure.poitrine,
            hanches: this.existingMesure.hanches,
            lcorps: this.existingMesure.lcorps,
            cuisse: this.existingMesure.cuisse,
            genou: this.existingMesure.genou,
            mollet: this.existingMesure.mollet,
            cheville: this.existingMesure.cheville,
            biceps: this.existingMesure.biceps,
            coude: this.existingMesure.coude,
            avantBras: this.existingMesure.avantBras,
            poignetCoude: this.existingMesure.poignetCoude,
            entreJambe: this.existingMesure.entreJambe,
            coutureExt: this.existingMesure.coutureExt,
            htotale: this.existingMesure.htotale,
          });
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
    this.updateMesureForm = this.formBuilder.group({
      tete: ['', Validators.required],
      cou: ['', Validators.required],
      epaule: ['', Validators.required],
      lbras: ['', Validators.required],
      poitrine: ['', Validators.required],
      hanches: ['', Validators.required],
      lcorps: ['', Validators.required],
      cuisse: ['', Validators.required],
      genou: ['', Validators.required],
      mollet: ['', Validators.required],
      cheville: ['', Validators.required],
      biceps: ['', Validators.required],
      coude: ['', Validators.required],
      avantBras: ['', Validators.required],
      poignetCoude: ['', Validators.required],
      entreJambe: ['', Validators.required],
      coutureExt: ['', Validators.required],
      htotale: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.updateMesureForm.invalid) {
      return;
    }
    const formdata = this.updateMesureForm.value;
    const idUpdate = this.existingMesure?.idMesure;
    if (this.existingMesure && this.existingMesure.idMesure !== null){
      const updateMesureId = this.existingMesure.idMesure;
      this.mesureService.updateClientMesure(updateMesureId, formdata).subscribe(
        response => {
          // Handle the response from the backend
          console.log(response);
          window.alert('Les mesure du client a été modifié avec succès!');
        },
        error => {
          // Handle any errors from the backend
          console.error(error);
        }
      );
    }
  }

}
