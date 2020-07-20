class MinerGame {
	constructor() {
		this.isGameStart = false;
		this.x = 8;
		this.y = 8;
		this.mines = 10;
		this.field = [];
		this.start()
	}

	start() {
		this.renderView()
	}

	openCell(e) {
		const currentCell = e.target.getAttribute("data-position").split(":").map(i=>+i);
		console.log(currentCell);
		if(this.isGameStart) {

		} else {
			this.renderField();
			this.isGameStart = true;
		}
	}

	renderView() {
		const field = document.getElementById("miner");
		for(let i = 0; i < this.x; i++){
			const row = document.createElement("div");
			row.className = "row"
			for(let j = 0; j < this.y; j++){
				const cell = document.createElement("div")
				cell.className = "cell";
				cell.setAttribute("data-position", `${i}:${j}`);
				cell.addEventListener("click", this.openCell.bind(this));
				row.appendChild(cell);
			}
			field.appendChild(row);
		}
	}

	renderField() {
		const array = Array.from((new Array(this.x * this.y)).keys())
		console.log(array);
	}
}

const game = new MinerGame();