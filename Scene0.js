class Scene0 extends Phaser.Scene{
	constructor (){
		super("Scene_0");
	}


	preload(){
		this.load.image('ecran','Assets/ecran_titre.png');
	}

	create(){
		this.add.image(370,640,'ecran');

		//clique souris 

			this.input.on('pointerdown', function (pointer){
				this.scene.start('Scene1');

			}, this);
		
	}

	update(){
		/*if (this.cursors.up.isDown) {
			this.scene.start('Scene_2',{nombreVie: this.nombreVie, score: this.score});
		}*/
	}
}