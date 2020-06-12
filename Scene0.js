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
				this.scene.start('Scene_1');

			}, this);
		
	}

	update(){
		
	}
}