class Scene3 extends Phaser.Scene{
	constructor (){
		super("Scene_3");
	}


	init(data){
    	this.vie= data.vie;

    }

	preload(){
		this.load.image('borne','Assets/borne_arcade.png');
		this.load.image('base1','Assets/base1.png');
		this.load.image('base2','Assets/base2.png');
		this.load.image('base3','Assets/base3.png');
		this.load.image('base4','Assets/base4.png');
		this.load.image('objet1','Assets/objet1.png');
		this.load.image('objet2','Assets/objet2.png');
		this.load.image('objet3','Assets/objet3.png');
		this.load.image('vie','Assets/Mayu.png');
		this.load.image('base0','Assets/base0.png');
		this.load.image('Hiyor','Assets/hiyori_borne.png');
		this.load.image('may','Assets/mayu_borne.png');
		this.load.image('timebar','Assets/timebar.png');


	}

	create(){
		this.add.image(360,640,'borne').setScale(0.31);
		


		this.base0 = this.physics.add.staticImage(605,845,'base0');

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

	// base 1

		this.base1 = this.physics.add.sprite(600,750,'base1').setGravityY(-600).setScale(0.6);

	// objet 1

		this.objet1 = this.physics.add.sprite(390,500,'objet1').setGravityY(-600).setScale(0.6).setInteractive();
		this.physics.add.collider(this.objet1,this.base1);

	// base 2

		this.base2 = this.physics.add.sprite(600,740,'base2').setGravityY(-600).setScale(0.6).setVisible(false);

	//objet 2

		this.objet2 = this.physics.add.sprite(390,500,'objet2').setGravityY(-600).setScale(0.6).setInteractive().setVisible(false);
		this.physics.add.collider(this.objet2,this.base2);

	// base 3

		this.base3 = this.physics.add.sprite(600,720,'base3').setGravityY(-600).setScale(0.6).setVisible(false);

	// Objet 3
		
		this.objet3 = this.physics.add.sprite(390,520,'objet3').setGravityY(-600).setScale(0.6).setInteractive().setVisible(false);
		this.physics.add.collider(this.objet3,this.base3);

	// base 4

		this.base4 = this.physics.add.sprite(390,657,'base4').setGravityY(-600).setScale(0.7).setVisible(false);


	// Click objet 1

		this.objet1.on('pointerdown', function (pointer){
				this.objet1.setGravityY(300);
			}, this);

	// Click objet 2

		this.objet2.on('pointerdown', function (pointer){
				this.objet2.setGravityY(300);
			}, this);

	// Click objet 3

		this.objet3.on('pointerdown', function (pointer){
				this.objet3.setGravityY(300);
			}, this);

	// collider 

		// collider avec base 0
			this.physics.add.collider(this.base0,this.base1);
			this.physics.add.collider(this.base0,this.base2);
			this.physics.add.collider(this.base0,this.base3);
			this.physics.add.collider(this.base0,this.base4);
		// collider avec objet et lancement fonction

			this.physics.add.collider(this.base1,this.objet1,changeImage1,null,this);
			this.physics.add.collider(this.base2,this.objet2,changeImage2,null,this);
			this.physics.add.collider(this.base3,this.objet3,changeImage3,null,this);

		// collider objet avec base 

			this.physics.add.collider(this.base0,this.objet1,retry1,null,this);
			this.physics.add.collider(this.base0,this.objet2,retry2,null,this);
			this.physics.add.collider(this.base0,this.objet3,retry3,null,this);
		
	// fonction chgt image

		function changeImage1 (base1, objet1){
			this.base1.setVisible(false);
			this.base2.setVisible(true);
			this.objet1.destroy(true);
			this.objet2.setVisible(true);


		}

		function changeImage2 (base2, objet2){
			this.base2.setVisible(false);
			this.base3.setVisible(true);
			this.objet2.destroy(true);
			this.objet3.setVisible(true);
		}

		function changeImage3 (base3, objet3){
			this.base3.setVisible(false);
			this.base4.setVisible(true);
			this.objet3.destroy(true);


			this.gameTimer.paused = true;
			this.text = this.add.text(150, 500, "Bien joué tu as réussi à \naider remporté le duel \ncontre Hiyori !", {'font': '30px', fill: '#000'}).setScrollFactor(0);

			this.timedEvent = this.time.delayedCall(5000, changeLevel, [], this);

			function changeLevel(){
				this.scene.start('Narration_4',{vie:this.vie});
			}
			
		}

	// fonction raté et tp de l'objet 

		function retry1 (base0, objet1){
			this.objet1.x=390;
			this.objet1.y=500;
			this.objet1.setGravityY(-600);
		}

		function retry2 (base0, objet2){
			this.objet2.x=390;
			this.objet2.y=500;
			this.objet2.setGravityY(-600);
		}

		function retry3 (base0, objet3){
			this.objet3.x=390;
			this.objet3.y=500;
			this.objet3.setGravityY(-600);
		}

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
						        this.scene.start('Transition3',{vie:this.vie});
						        console.log(this.vie)

						    }
						    if(this.vie == 1){
						        this.vie2.destroy(true);
						        this.scene.start('Transition3',{vie:this.vie});
							}
						    if(this.vie == 0){
						        this.vie1.destroy(true);
						        this.text = this.add.text(50, 300, " Game over !", {'font': '40px', fill: '#fff'}).setScrollFactor(0);
						        this.scene.start('Transition3',{vie:this.vie});
						    }

	                    }
	                },
	                callbackScope: this,
	                loop: true
	            });
	            this.gameTimer.paused = false;

		this.add.image(100,1150,'may').setScale(0.4);
		this.add.image(650,1150,'Hiyor').setScale(0.4);
	}

	update(){

		// base 1 
			if (this.base1.x >= 600){
	    		this.tweens.add({
			    	targets: this.base1,
			   	 	x : -100,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 5000,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			}
			
			if (this.base1.x <= 150){
				this.tweens.add({
			    	targets: this.base1,
					x : 600,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 3500,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			}

		// base 2

			if (this.base2.x >= 600){
	    		this.tweens.add({
			    	targets: this.base2,
			   	 	x : -100,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 5000,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			}
			
			if (this.base2.x <= 150){
				this.tweens.add({
			    	targets: this.base2,
					x : 600,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 3500,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			}

		// base 3

			if (this.base3.x >= 600){
	    		this.tweens.add({
			    	targets: this.base3,
			   	 	x : -100,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 5000,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			}
			
			if (this.base3.x <= 150){
				this.tweens.add({
			    	targets: this.base3,
					x : 600,
			    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
			    	duration: 3500,
			    	repeat: 0,            // -1: infinity
			    	yoyo: false
				});
			}


	}
}