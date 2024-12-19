const MAX_LIFE = 100;

export class Fighter {
	constructor(name, strength, dexterity) {
		this.name = name;
		this.strength = strength;
		this.dexterity = dexterity;
		this.life = MAX_LIFE;
		this.weapon = null;
		this.shield = null;
	}

	// Launch a fight
	fight(defender) {
		const attackPoints = this.getRandomInt(this.getDamage());

		const damages = Math.max(attackPoints - this.getDefense(), 0);

		defender.life = Math.max(defender.life - damages, 0);
	}

	// Generate a random value between 1 and max
	getRandomInt(max) {
		return 1 + Math.floor(Math.random() * max);
	}

	getDamage() {
		return this.strength + (this.weapon?.damage ?? 0);
	}

	getDefense() {
		return this.dexterity + (this.shield?.protection ?? 0);
	}

	// Determine if a fighter is still alive
	isAlive() {
		return this.life > 0;
	}
}
