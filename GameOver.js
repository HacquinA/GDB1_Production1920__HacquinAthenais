class GameOver extends Phaser.Scene{
	constructor (){
		super("Game_over");
	}

	init(data){
		this.vie = data.vie;
	}
	
	preload(){
		this.load.image('gameover','Assets/gameover.png');
	}

	create(){
		this.add.image(370,640,'gameover');

		//clique souris 

			this.input.on('pointerdown', function (pointer){
				this.scene.start('Scene_0');

			}, this);
		
	}

	update(){
		
	}
}