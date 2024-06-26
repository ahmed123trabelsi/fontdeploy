import { AfterViewInit, Component, Inject, NgModule, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { JobsListService } from 'app/admin/jobs/jobs-list/jobs-list.service';
import { JobsList } from 'app/admin/jobs/jobs-list/jobs-list.model';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormdialogComponentComponent } from './formdialog-component/formdialog-component.component';
import { ChatService } from './chat.service';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
 
  { path: 'services', component:ServiceComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirection par défaut vers /home
];
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,MatIconModule , ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements AfterViewInit , OnInit   {
  job!:JobsList;
  jobId!: string;

  jobsList: JobsList[] = [];
  userInput: string = '';
  constructor(private chatS : ChatService , private fb: FormBuilder , private http: HttpClient,private r:Router,private jobservice:JobsListService,public dialog:MatDialog) {
    
  }
  route(){
    this.r.navigate(['authentication/signin'])
  }
  ngAfterViewInit(): void {
    const chatbox = document.querySelector('.chatbox__support');
    const openChatboxBtn = document.querySelector('.chatbox__button');
    if (chatbox && openChatboxBtn) {
      openChatboxBtn.addEventListener('click', () => {
          chatbox.classList.toggle('chatbox--active'); 
      });
    } else {

    }
  }
  ngOnInit(): void {
    this.jobservice.getJobs().subscribe(
      (jobs: any[]) => {
        this.jobsList = jobs; // Assurez-vous que votre service renvoie la liste des emplois
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
    this.messageForm = this.fb.group({
      newMessage: ['']
    });
  }
  messages: any[] = [];
  messageForm !: FormGroup; 

sendMessage() {
  const newMessageControl = this.messageForm?.get('newMessage');
  if (newMessageControl && newMessageControl.value?.trim()) {
    const userMessage = newMessageControl.value.trim();
    this.chatS.sendMessage(userMessage).subscribe(response => {
      // Ajouter le nouveau message envoyé par l'utilisateur
      this.messages.push({ text: userMessage, type: 'sent' });

      // Ajouter le message reçu du chatbot
      this.messages.push({ text: response.data.message, type: 'received' });

      // Réinitialiser le champ de saisie après l'envoi du message
      newMessageControl.reset();
    }, error => {
     
    });
  }
}
openDialog(jobId: string, jobTitle: string,event: MouseEvent): void {
  // Empêcher la redirection vers l'authentification si le clic provient du bouton "Read More"
  event.preventDefault();
  console.log('ID du job:', jobId);
  console.log('Titre du job:', jobTitle);
  // Ouvrir le dialogue
  const dialogRef = this.dialog.open(FormdialogComponentComponent, {
    width: '750px', // Largeur spécifique du dialog
    height: '400px', // Hauteur spécifique du dialog
    panelClass: 'dialog-container',
     // Définissez la largeur du dialogue selon vos besoins
    data: { jobId: jobId ,jobTitle: jobTitle} // Passez l'ID de l'emploi au dialogue
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialogue fermé');
    // Traitez ici toute logique après la fermeture du dialogue si nécessaire
  });
}
openCV(): void {
  const dialogRef = this.dialog.open(ServiceComponentComponent, {
    width: '600px', // Définissez la largeur du dialog selon vos besoins
    disableClose: true, // Empêche la fermeture du dialog en cliquant en dehors
    autoFocus: false // Désactive la mise au focus automatique sur le premier champ de saisie
  });

  // Vous pouvez ajouter un code pour gérer les événements après la fermeture du dialog si nécessaire
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog fermé', result);
  });
}
}