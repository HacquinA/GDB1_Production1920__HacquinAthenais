class Narration2 extends Phaser.Scene{
	constructor (){
		super("Narration_2");
	}


	init(data){
    	this.vie= data.vie;

    }

	preload(){

		this.load.image('chisE','Assets/chise.png');
		this.load.image('kumabo','Assets/kumabo_rit.png');


	}

	create(){
	
	this.text = this.add.text(20, 500, "Bien, félicitation\ntu as réussi à arriver à l'heure \npour le bento avec Saiya", {'font': '35px', fill: '#fff'}).setScrollFactor(0);


		//clique souris 

		this.nbClick = 0;

			this.input.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);
				if(this.nbClick == 1){
					this.text1 = this.add.text(100, 500, "Passon à une autre \nhistoire ça te dit ?", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text.setVisible(false);
				}
				if (this.nbClick==2){
					this.text1.setVisible(false);
					this.text2 = this.add.text(20, 100, "Je te présente chisE,\nune des plus proche amies de Mayu", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text3 = this.add.text(20, 300, "Elles sont inséparables !\nchisE aime le danger et l'aventure \nmais aussi et surtout les combats.", {'font': '30px', fill: '#fff'}).setScrollFactor(0);
					this.chisE = this.add.image(370,900,'chisE').setScale(0.5);

				}
				if (this.nbClick == 3){
					this.text2.setVisible(false);
					this.text3.setVisible(false);
					this.text4 = this.add.text(20, 100, "C'est pourquoi un jour chisE\nà voulus emmener Mayu combattres\nkumabos avec elle. Elle voulait\nlui montrerce que l'on peut\nressentir grâce à l'action.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.chisE.setVisible(false);
								

				}
				if (this.nbClick == 4){
					this.text4.setVisible(false);
					this.text5 = this.add.text(20, 85, "Te voila donc face à un Kumabo,\naide chisE à le vaincre !\nIl te suffit de cliquer dessus à l'aide\nde la souris pour le destabiliser\net qu'il lève son bouclier !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text6 = this.add.text(20, 300, "Allez c'est partis ! CLIQUE ! ", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.kumabo = this.add.image(370,800,'kumabo').setScale(2);
				}
				if (this.nbClick == 5){
					this.scene.start('Scene_2',{vie:this.vie});
				}
					

			}, this);
			
			
			

	}

	update(){
		
	}
}

