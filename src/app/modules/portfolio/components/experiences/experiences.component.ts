import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Fullstack Developer Sênior',
        p: 'TTY | Out 2023 - Present',
      },
      text: '<p>Desde outubro de 2023, atuo como Desenvolvedor FullStack Sênior na TTY, utilizando PHP, Laravel, Javascript, TypeScript, Angular 2+, Material Design, Html5, Css3, NodeJs, PostgreSQL.</p> <p>Além disso, minha experiência abrange a integração entre APIs, Docker, GitLab, CI/CD, Elastic, Testes unitários, SonarQube, Redmine e Scrum. Atualmente, enfrento o desafio de finalizar um sistema já em andamento para ser publicado em produção.</p> <p>Destaco também a utilização de testes unitários no front-end e back-end, seguindo os padrões de qualidade de código do SonarQube.</p>',
    },
    {
      summary: {
        strong: 'Fullstack Developer',
        p: 'Techsocial | Mar 2022 - Out 2023',
      },
      text: '<p>Durante meu período na Techsocial de março de 2022 a outubro de 2023, atuei inicialmente como Desenvolvedor FullStack, após quase um ano de empresa, comecei a atuar como TechLead, liderando uma equipe de dois membros.</p> <p>Minhas responsabilidades incluíam o uso de PHP, Javascript, jQuery, Html5, Css3, Bootstrap, MySQL, Docker, Git, Bitbucket, AWS, CI/CD e Linux.</p> <p>Além disso, liderei integrações com APIs, como Azure Active Directory, Onetrust, Ariba e MrSuppier.</p> <p>Durante meu período na tech, também participei de migrações de alguns sistemas, da SaveinCloud para AWS utilizando os seguintes serviços(ECS,ECR,S3,RDS,EC2,CodePipeLine,Secrets Manager). E também automatizei alguns pipelines dos sistemas que utilizávamos.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Fullstack Júnior',
        p: 'P21 Sistemas | Feb 2020 - Mar 2022',
      },
      text: '<p>Em minha jornada na P21 Sistemas, tive a oportunidade de conhecer realmente o mundo do desenvolvimento de software, seguindo padrões e metodologias de mercado.</p> <p>Iniciei minha jornada na P21 Sistemas, como Desenvolvedor FullStack Júnior, onde pude aprender com ótimos profissionais, que me ajudaram a desenvolver pessoalmente e profissionalmente.</p> <p>Durante minha jornada, atuei em um projeto com framework PHP próprio e com as seguintes tecnologias/metodologias: PHP, Javascript, jQuery, Html5, Css3, Bootstrap, Jira, AWS, Docker, Git, GitHub, PHPStorm, MySQL, Linux, Kanban e OKR.</p><p>Durante o meu período na P21, tive a oportunidade de trabalhar em melhorias na plataforma, como também atuar no suporte, atendendo chamados e gerando relatórios, e com a equipe trabalhamos para diminuir os custos dos sistemas, assim que se prolongou a pandemia.</p>',
    },
    {
      summary: {
        strong: 'Programador',
        p: 'Ibs Tecnologia Web |  Mar 2018 - Out 2019',
      },
      text: '<p>Minha jornada na empresa Ibs Tecnologia Web foi um pontapé inicial para o mundo do desenvolvimento web.</p> <p>Foi um período de aprendizado intenso no desenvolvimento web, abrangendo a criação de sites web.</p> <p>Durante meu período na IBS, trabalhei com as seguintes tecnologias: Joomla, WordPress, PHP, JavaScript, Html, Css, jQuery, JSON, Ajax e SQL.</p> <p>Também pude contribuir na criação de componentes/módulos utilizando Joomla, banners e publicação de aplicativos na play store.</p>',
    },
  ]);
}
