class Scene2 extends Phaser.Scene{
	constructor (){
		super("Scene_2");
	}


	preload(){
		this.load.image('back','Assets/CombatDecor.png');
		this.load.spritesheet('chise','Assets/Chise_attaque.png',{frameWidth: 220, frameHeight: 298});
		this.load.image('kumabo_ame','Assets/kumabo_ame.png');
		this.load.image('kumabo_attaque','Assets/kumabo_attaque.png');
		this.load.image('kumabo_rit','Assets/kumabo_rit.png');
		this.load.image('kumabo_surpris','Assets/kumabo_surpris.png');
		this.load.image('timebar','Assets/timebar.png');



	}

	create(){
		this.add.image(362,640,'back');

		// chise 
			this.chise = this.physics.add.staticSprite(110,655,'chise');

			this.anims.create({
			    key: 'anime',
			    frames: this.anims.generateFrameNumbers('chise', { start: 0, end: 2}),
			    frameRate: 6,
			    repeat: -1
			});


		// kumabo 
			this.nbClick = 0;

			this.kumabo = this.physics.add.staticImage(605,600,'kumabo_attaque').setGravity(-600).setInteractive();
			this.kumaboR = this.physics.add.staticImage(605,580,'kumabo_rit').setGravity(-600).setInteractive().setVisible(false);
			this.kumaboS = this.physics.add.staticImage(605,605,'kumabo_surpris').setGravity(-600).setInteractive().setVisible(false);
			this.kumaboA = this.physics.add.staticImage(510,670,'kumabo_ame').setGravity(-600).setInteractive().setVisible(false).setScale(0.7);


			this.kumabo.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);

			}, this);

			this.kumaboR.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);

			}, this);
			
			this.kumaboS.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);

			}, this);

		//timebar//
		let gameOptions = { initialTime: 800 }
	            this.timeLeft = gameOptions.initialTime;
	            let timebar = this.add.sprite(0, 0, "timebar").setOrigin(0,0).setScrollFactor(0);

	            this.energyMask = this.add.sprite(timebar.x, timebar.y, "timebar").setOrigin(0,0).setScrollFactor(0);

	            this.energyMask.visible = false;
	     
	            timebar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);

	            this.gameTimer = this.time.addEvent({
	                delay: 10,
	                callback: function() {
	                    this.timeLeft --;
	                    let stepWidth = this.energyMask.displayWidth / gameOptions.initialTime;
	                    this.energyMask.x -= stepWidth;

	                    if(this.timeLeft == 0) {
	                    	this.vie--;
	                    	//sthis.gameTimer.paused = true;
	                    	//this.timedEvent = this.time.delayedCall(5000, changeLevel, [], this);
	                    	
	                    	//this.text = this.add.text(50, 300, "Temps écoulé ! \nTu vas être téléporté \nà l'ecran titre. \ntu peux recommencer mais \navec une vie en moins !", {'font': '40px', fill: '#fff'}).setScrollFactor(0);
	                    //this.player.setVelocityX(0);

	                    }
	                },
	                callbackScope: this,
	                loop: true
	            });
	            this.gameTimer.paused = false;

	}

	update(){
		
	//animation chise
		if(this.timeLeft != 0){
            this.chise.anims.play('anime', true);
		}


	// kumabo update 

		if (this.nbClick == 20){
			this.kumabo.setVisible(false);
			this.kumaboR.setVisible(true);
		} 
		if (this.nbClick == 50){
			this.kumaboR.setVisible(false);
			this.kumaboS.setVisible(true);
		}
		if (this.nbClick == 70){
			this.kumaboS.setVisible(false);
			this.kumaboA.setVisible(true);
		}
	}

}