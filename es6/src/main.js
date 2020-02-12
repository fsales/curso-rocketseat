class App {
  constructor() {
    this.repositories = [];
    this.formEl = document.getElementById('repo-form');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();
    this.repositories.push({
      nome: 'rocketseat.com.br',
      description: 'Tire a sua ideia do papel.',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      html_url: 'https://rocketseat.com.br/',
    });

    console.log(this.repositories);
  }
}
const meuApp = new App();