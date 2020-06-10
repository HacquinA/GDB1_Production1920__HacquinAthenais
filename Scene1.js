class Scene1 extends Phaser.Scene{
	constructor (){
		super("Scene_1");
	}


	preload(){
		this.load.spritesheet('mayu','Assets/Mayu_sprite.png',{frameWidth: 1075.5, frameHeight: 375});
	}

	create(){
		this.add.image(512,385,'mayu');
		
	}

	update(){
		/*if (this.cursors.up.isDown) {
			this.scene.start('Scene_1',{nombreVie: this.nombreVie, score: this.score});
		}*/
	}
}