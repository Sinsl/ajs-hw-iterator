export default class TeamGenerator {
  teams = [];

  constructor(...team) {
    this.teams.push(...team);
  }

  * [Symbol.iterator]() {
    for (const prop in this.teams) {
      if (this.teams[prop]) {
        yield this.teams[prop];
      }
    }
  }
}
