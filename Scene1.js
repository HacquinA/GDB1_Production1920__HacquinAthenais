class Scene1 extends Phaser.Scene{
	constructor (){
		super("Scene_1");
	}

	init(){
		
		var player;
		var route;
		var mayu;
		
		

	}

	preload(){
		this.load.spritesheet('mayu','Assets/Mayu_sprite.png',{frameWidth: 140, frameHeight: 174});
		this.load.image('rue','Assets/rue.png');
		this.load.image('route','Assets/platforme.png');
	}

	create(){
		
	//saut//
		this.saut = 2;
		this.nsaut = 1;
		
	//Monde
		
		this.add.image(770,640,'rue');

		this.route = this.physics.add.staticImage(200,1190,'route'); 

	//cursors//
		this.cursors = this.input.keyboard.createCursorKeys();

	// Mayu

		this.player = this.physics.add.sprite(100,980,'mayu');
		this.player.direction = 'right';
		//this.player.setCollideWorldBounds(true);
		this.physics.add.collider(this.player,this.route);
		this.player.setVelocityX(600);
		this.player.anims.play('right', true);


	// Camera scrolling 

		this.cameras.main.startFollow(this.player);
		this.cameras.main.setBounds(0, 0, 2000, 600);

		this.anims.create({
			    key: 'right',
			    frames: this.anims.generateFrameNumbers('mayu', { start: 0, end: 1}),
			    frameRate: 4,
			    repeat: -1
			});

		this.anims.create({
			key: 'saut',
			frames: this.anims.generateFrameNumbers('mayu', { start: 2, end: 2}),
			frameRate: 4,
			repeat: -1
		});
		
		this.anims.create({
			key: 'double_saut',
			frames: this.anims.generateFrameNumbers('mayu', { start: 3, end: 3}),
			frameRate: 4,
			repeat: -1
		});


	/*	//timebar//
		let gameOptions = { initialTime: 650 }
	            this.timeLeft = gameOptions.initialTime;
	            let timebar = this.add.sprite(0, 0, "timebar").setOrigin(0,0);

	            this.energyMask = this.add.sprite(timebar.x, timebar.y, "timebar").setOrigin(0,0);

	            this.energyMask.visible = false;
	     
	            timebar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energyMask);

	            this.gameTimer = this.time.addEvent({
	                delay: 10,
	                callback: function() {
	                    this.timeLeft --;
	                    let stepWidth = this.energyMask.displayWidth / gameOptions.initialTime;
	                    this.energyMask.x -= stepWidth;
	                },
	                callbackScope: this,
	                loop: true
	            });
	            this.gameTimer.paused = false;

	            this.cursors = this.input.keyboard.createCursorKeys();*/
		
	}

	update(){

		// Deplacement du perso// 

			if(this.cursors.up.isDown && this.player.body.touching.down){
				this.saut = 2;
			}

			if ((this.nSaut==1) && this.saut>0 && this.cursors.up.isDown){
				this.saut --;
				this.nSaut=0;

				if (this.saut == 1) {
				this.player.setVelocityY(-250);

				if (this.player.body.velocity.y<0) {

					}
				}

				if (this.saut == 0) {
				this.player.setVelocityY(-250);
				if (this.player.body.velocity.y<0) {
				}}
			}

			if (this.cursors.up.isUp) {
				this.nSaut=1;
			}





	}
}