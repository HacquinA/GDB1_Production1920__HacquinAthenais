class Scene2 extends Phaser.Scene{
	constructor (){
		super("Scene_2");
	}


	preload(){
		this.load.image('logo','Assets/logo.png');
	}

	create(){
		this.add.image(370,640,'logo');

		
		
	}

	update(){
		
	}
}