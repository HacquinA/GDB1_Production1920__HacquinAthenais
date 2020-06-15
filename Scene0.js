class Scene0 extends Phaser.Scene{
	constructor (){
		super("Scene_0");
	}


	init(data){
    	this.vie= data.vie;

    }

	preload(){
		this.load.image('ecran','Assets/ecran_titre.png');
	}

	create(){
		this.add.image(370,640,'ecran');
		this.vie = 3

		//clique souris 

			this.input.on('pointerdown', function (pointer){
				this.scene.start('Scene_2', {vie:this.vie});

			}, this);
		
	}

	update(){
		
	}
}