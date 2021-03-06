class Scene1 extends Phaser.Scene{
	constructor (){
		super("Scene_1");
	}

	init(data){
		this.vie = data.vie;
	}

	preload(){
		this.load.spritesheet('mayu','Assets/Mayu_sprite.png',{frameWidth: 220.4, frameHeight: 174});
		this.load.spritesheet('glissade','Assets/Mayu_spriteglissade.png',{frameWidth: 245, frameHeight: 174});
		this.load.image('rue','Assets/rue.png');
		this.load.image('route','Assets/platforme.png');
		this.load.image('lanterne_petite','Assets/lanterne_petite.png');
		this.load.image('lanterne_grande','Assets/lanterne_grande.png');
		this.load.image('pont','Assets/pont.png');
		this.load.image('Saiya','Assets/Saiya.png');
		this.load.image('vie','Assets/Mayu.png');
		this.load.image('timebar','Assets/timebar.png');
		this.load.image('gameover','Assets/gameover.png');
		this.load.image('collid','Assets/collid.png');





	}

	create(){
		

	//saut//
		this.saut = 2;
		this.nsaut = 1;
		
	//Monde
		
		this.add.image(2500,640,'rue');

		this.route = this.physics.add.staticImage(2500,1300,'route'); 

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


	//cursors//
		this.cursors = this.input.keyboard.createCursorKeys();

	// Mayu

		this.player = this.physics.add.sprite(100,1100,'mayu').setOffset(0,0);
		this.player.direction = 'right';
		this.player.setVelocityX(400);
		this.physics.add.collider(this.player,this.route);

	//Saiya


		this.Saiya = this.physics.add.sprite(4800,500,'Saiya').setScale(1.5);
		this.physics.add.collider(this.Saiya,this.route);
		this.physics.add.overlap(this.Saiya,this.player);


	// obstacles 
		

		this.collid = this.physics.add.sprite(2300,1000,'collid');
		this.physics.add.collider(this.collid,this.player);

		this.obstacles = this.physics.add.staticGroup(); 
	        //this.obstacles.create(600,1200,'lanterne_petite');
	        this.obstacles.create(1200,1150,'lanterne_grande');
	        //this.obstacles.create(1850,1150,'pont').setSize(40,20,true);
	        this.obstacles.create(2300,1150,'pont').setSize(40,20,true);
	        this.obstacles.create(3500,1150,'lanterne_grande');
	        //this.obstacles.create(3600,1200,'lanterne_petite');
	        this.obstacles.create(4100,1150,'pont').setSize(40,20,true);



	        this.physics.add.overlap(this.player,this.obstacles ,hitL,null,this);

			


	// Camera scrolling 

		this.cameras.main.startFollow(this.player);
		this.cameras.main.setBounds(0, 0, 5000, 600);

		this.anims.create({
			    key: 'right',
			    frames: this.anims.generateFrameNumbers('glissade', { start: 0, end: 1}),
			    frameRate: 12,
			    repeat: -1
			});

		this.anims.create({
			key: 'saut',
			frames: this.anims.generateFrameNumbers('mayu', { start: 1, end: 2}),
			frameRate: 4,
			repeat: -1
		});
		
		this.anims.create({
			key: 'double_saut',
			frames: this.anims.generateFrameNumbers('mayu', { start: 2, end: 3}),
			frameRate: 4,
			repeat: -1
		});

		this.anims.create({
			key: 'glissade',
			frames: this.anims.generateFrameNumbers('glissade', { start: 0, end: 2}),
			frameRate: 4,
			repeat: -1
		});

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
						        this.scene.start('Transition',{vie:this.vie});
						        console.log(this.vie)

						    }
						    if(this.vie == 1){
						        this.vie2.destroy(true);
						        this.scene.start('Transition',{vie:this.vie});
							}
						    if(this.vie == 0){
						        this.vie1.destroy(true);
						        this.text = this.add.text(50, 300, " Game over !", {'font': '40px', fill: '#fff'}).setScrollFactor(0);
						        this.scene.start('Transition',{vie:this.vie});
						    }
	                    }
	                },
	                callbackScope: this,
	                loop: true
	            });
	            this.gameTimer.paused = false;

	            this.cursors = this.input.keyboard.createCursorKeys();


	            
	           
	        // fonction hit obstacles 

	           function hitL (obstacles, player){
	            	this.player.x=300;
	            }	


	// door et chgt de scene
		this.physics.add.overlap(this.player, this.Saiya, maFonction, null, this);


		function maFonction(){
			this.scene.start('Narration_2');
			
		}
	
		function changeLevel(){
			this.scene.start('Scene_0');
			
		}
	}

	update(){
		if (this.player.x < 2000) {
			this.player.setSize(50, 174, true);
			
			this.player.anims.play('right', true);
		}
			
		// Deplacement du perso// 

		if (this.player.body.touching.down && this.cursors.up.isDown)
        {
            this.saut= 2;
        }

        if (this.cursors.up.isUp){
            this.nsaut = 1;

        }

        if (this.nsaut == 1 && this.saut > 0 && this.cursors.up.isDown)
        {
            this.saut--;
            this.nsaut = 0;
            if (this.saut == 1) 
            {    
                this.player.anims.play('jump', true);
                this.player.setVelocityY(-500);
            }

            if (this.saut== 0) 
            {
                this.player.setVelocityY(-450);
                this.player.anims.play('jump', true);
            }
        }

			// glissade 

				

			if (this.cursors.down.isDown) {
			    //this.player.setVelocityY(200);
			    //this.player.anims.play('saut', false);
			   // this.player.anims.play('glissade', true);
			    this.player.setSize(110, 52, true);
			    this.player.direction = 'right';
			    this.player.y=1210;
	  	//vie
			    this.time.addEvent({
	                delay: 800,
	                callback: function() {
	                	this.player.y=1150;
	                	if(this.player.x<700 & this.player.x>300){
	                		this.player.x=410;
	                	}
	                	if(this.player.x<1400 & this.player.x>900){
	                		this.player.x=710;
	                	}
						this.player.setSize(50, 174, true);
	                },
	                callbackScope: this
	            });
	            						

			    
			}
			
	

	}
}