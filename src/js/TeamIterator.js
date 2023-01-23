export default class TeamIterator {
  teams = [];

  constructor(...team) {
    this.teams.push(...team);
  }

  [Symbol.iterator]() {
    const entries = this.teams;
    let idx = -1;

    return {
      next() {
        idx += 1;
        return {
          value: entries[idx],
          done: idx >= entries.length,
        };
      },
    };
  }
}
