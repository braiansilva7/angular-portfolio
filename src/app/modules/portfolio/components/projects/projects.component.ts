import { Component, computed, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/memory-game.svg',
      alt: 'Projeto Jogo da Memória',
      title: 'Jogo da Memória',
      with: '100px',
      height: '51px',
      description: '<p>Explore o fascinante mundo do jogo da memória desenvolvido em ReactJs.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/braiansilva7/react-jogo-memoria'
        }
      ]
    },

    {
      src: 'assets/img/projects/imc-calculator.svg',
      alt: 'Projeto Calculadora IMC',
      title: 'Calculadora IMC',
      with: '100px',
      height: '51px',
      description: '<p>Explore o seu cálculo IMC, projeto desenvolvido em ReactJs.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/braiansilva7/react-calc-imc'
        }
      ]
    },

    {
      src: 'assets/img/projects/calculator.svg',
      alt: 'Projeto Calculadora',
      title: 'Calculadora',
      with: '100px',
      height: '51px',
      description: '<p>Explore a calculadora, com opções de salvar os cálculos em banco de dados, projeto desenvolvido em HTML5 | CSS3 | JavaScript.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/braiansilva7/calculator'
        }
      ]
    },

    {
      src: 'assets/img/projects/lottery.svg',
      alt: 'Projeto Loteria',
      title: 'Sorteio Aleatório de Jogos da Loteria',
      with: '100px',
      height: '51px',
      description: '<p>Explore o sorteio aleatório de jogos da Loteria Federal, projeto desenvolvido em HTML5 | CSS3 | PHP.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/braiansilva7/loteria'
        }
      ]
    }
  ])

  public currentIndex = signal(0);

  public currentProject = computed(() => this.arrayProjects()[this.currentIndex()]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }

  public prev(){
    const index = this.currentIndex();
    this.currentIndex.set(index === 0 ? this.arrayProjects().length - 1 : index - 1);
  }

  public next(){
    const index = this.currentIndex();
    this.currentIndex.set((index + 1) % this.arrayProjects().length);
  }
}
