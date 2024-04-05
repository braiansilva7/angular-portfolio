import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor FullStack',
        p: 'Força Aérea Brasileira - 2 Tenente | Out 2023 - Present'
      },
      text: 'Desenvolvimento e manutenção de aplicações com as seguintes tecnologias: HTML5, SASS, CSS3, AdonisJs, Angular, PHP, Laravel.'
    },
    {
      summary: {
        strong: 'Desenvolvedor PHP e NodeJs FullStack',
        p: 'Advance Telecom | Set 2022'
      },
      text: 'Desenvolvimento de aplicações utilizando as seguintes tecnologias: HTML, CSS, Javascript, Typescript, NodeJs, VueJs, PHP, Laravel, Mysql, Mongo, Redis e Git.'
    },
    {
      summary: {
        strong: 'Desenvolvedor FullStack',
        p: 'CentralIT | Jun 2016'
      },
      text: 'Desenvolvimento de aplicações utilizando as seguintes tecnologias: HTML, CSS, Javascript, NodeJs, PHP, Mysql, Mongo e Git.'
    }
  ])
}
