class Scene2 extends Phaser.Scene{
	constructor (){
		super("Scene_2");
	}

	init(data){
		this.vie = data.vie;
	}

	preload(){
		this.load.image('back','Assets/CombatDecor.png');
		this.load.spritesheet('chise','Assets/Chise_attaque.png',{frameWidth: 220, frameHeight: 298});
		this.load.image('kumabo_ame','Assets/kumabo_ame.png');
		this.load.image('kumabo_attaque','Assets/kumabo_attaque.png');
		this.load.image('kumabo_rit','Assets/kumabo_rit.png');
		this.load.image('kumabo_surpris','Assets/kumabo_surpris.png');
		this.load.image('timebar','Assets/timebar.png');
		this.load.image('bouclier','Assets/bouclier.png');
		this.load.spritesheet('chise_sort','Assets/Chise_sort.png',{frameWidth: 292, frameHeight: 63});
		this.load.image('vie','Assets/Mayu.png');



	}

	create(){
		this.add.image(362,640,'back');

		// vie 
		
		

		if(this.vie >= 3){
			this.vie1 = this.add.image(320,100,'vie').setScrollFactor(0);
			this.vie2 = this.add.image(200,100,'vie').setScrollFactor(0);
			this.vie3 = this.add.image(80,100,'vie').setScrollFactor(0);
		}

		if(this.vie >= 2){
			this.vie2 = this.add.image(200,100,'vie').setScrollFactor(0);
			this.vie3 = this.add.image(80,100,'vie').setScrollFactor(0);
		}

		if(this.vie >= 1){
			this.vie3 = this.add.image(80,100,'vie').setScrollFactor(0);
		}

		// chise 
			this.sort = this.physics.add.staticSprite(320,640,'chise_sort').setScale(0.8);
			this.chise = this.physics.add.staticSprite(115,655,'chise');
			

			this.anims.create({
			    key: 'anime',
			    frames: this.anims.generateFrameNumbers('chise', { start: 0, end: 2}),
			    frameRate: 6,
			    repeat: -1
			});

			this.anims.create({
			    key: 'sort',
			    frames: this.anims.generateFrameNumbers('chise_sort', { start: 0, end: 2}),
			    frameRate: 6,
			    repeat: -1
			});

		// kumabo 
			this.nbClick = 0;

			this.kumabo = this.physics.add.staticImage(605,600,'kumabo_attaque').setGravity(-600).setInteractive();
			this.kumaboR = this.physics.add.staticImage(605,580,'kumabo_rit').setGravity(-600).setInteractive().setVisible(false);
			this.kumaboS = this.physics.add.staticImage(605,605,'kumabo_surpris').setGravity(-600).setInteractive().setVisible(false);
			this.kumaboA = this.physics.add.staticImage(510,670,'kumabo_ame').setGravity(-600).setInteractive().setVisible(false).setScale(0.7);

			this.bouclier = this.add.image(450,600,'bouclier').setScale(4).setAlpha(0.7);

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

	                    // vie 
							if(this.vie == 2){
						        this.vie3.destroy(true);
						        this.scene.start('Transition2',{vie:this.vie});
						        console.log(this.vie)

						    }
						    if(this.vie == 1){
						        this.vie2.destroy(true);
						        this.scene.start('Transition2',{vie:this.vie});
							}
						    if(this.vie == 0){
						        this.vie1.destroy(true);
						        this.text = this.add.text(50, 300, " Game over !", {'font': '40px', fill: '#fff'}).setScrollFactor(0);
						        this.scene.start('Transition2',{vie:this.vie});
						    }

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
            this.sort.anims.play('sort', true);
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
			this.bouclier.setVisible(false);

			this.gameTimer.paused = true;

			this.text = this.add.text(5, 1000, " Bien joué tu as réussi à \n aider Chise a vaincre Kumabo!", {'font': '40px', fill: '#fff'}).setScrollFactor(0);

			this.timedEvent = this.time.delayedCall(5000, changeLevel, [], this);

			function changeLevel(){
				this.scene.start('Scene_3',{vie:this.vie});
			}

	
		}
	}

}