class Transition3 extends Phaser.Scene{
	constructor (){
		super("Transition3");
	}

	init(data){
		this.vie = data.vie;
	}

	preload(){
	}

	create(){
		
		if(this.vie == 3){

	        this.scene.start('Scene_3',{vie:this.vie});

	    }
		if(this.vie == 2){
			console.log(this.vie)
	        this.scene.start('Scene_3',{vie:this.vie});

	    }
	    if(this.vie == 1){
	        this.scene.start('Scene_3',{vie:this.vie});
		}
	    if(this.vie == 0){
	        this.text = this.add.text(50, 300, " Game over !", {'font': '40px', fill: '#fff'}).setScrollFactor(0);
	        this.scene.start('Game_over',{vie:this.vie});
	    }
		
	}

	update(){
		
	}
}