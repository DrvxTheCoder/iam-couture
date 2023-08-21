import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateMesureComponent } from './update-mesure/update-mesure.component';
const routes: Routes = [
    {path: 'clients', component: ClientListComponent},
    {path: 'client-details/:id', component: ClientDetailsComponent },
    {path: 'create-client', component: CreateClientComponent },
    {path: 'update-client/:id', component: UpdateClientComponent },
    {path: 'update-mesure/:id', component: UpdateMesureComponent },
    { path: '',   redirectTo: '/clients', pathMatch: 'full' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }