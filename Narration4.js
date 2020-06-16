class Narration4 extends Phaser.Scene{
	constructor (){
		super("Narration_4");
	}


	init(data){
    	this.vie= data.vie;

    }

	preload(){

		this.load.image('mayu_fenetre','Assets/Mayu_fenetre.png');
		this.load.image('mayu_top','Assets/Mayu_top.png');
		this.load.image('mayu_amis','Assets/amis.png');


	}

	create(){
	
	this.text = this.add.text(20, 500, "Tu es incroyable !\nBien..Je pense qu'il est temps\nde te dire la vérité..", {'font': '35px', fill: '#fff'}).setScrollFactor(0);


		//clique souris 

		this.nbClick = 0;

			this.input.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);
				if(this.nbClick == 1){
					this.text1 = this.add.text(20, 500, "En réalité..\nTu n'es pas simplement spectateur\ndes souvenirs de Mayu.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text.setVisible(false);
					

				}
				if (this.nbClick==2){
					this.text1.setVisible(false);
					this.text2 = this.add.text(20, 500, "C'est plus compliqué que ça.\nTu les as enfait restaurés.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);


				}
				if (this.nbClick == 3){
					this.text2.setVisible(false);
					this.text3 = this.add.text(20, 500, "Difficile à comprendre\nnest-ce-pas ? Je vais être plus\nclair, regarde de plus prés.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
				}

				if (this.nbClick == 4){
					this.text3.setVisible(false);
					this.text4 = this.add.text(30, 400, "Mayu est en réalité atteinte\nd'une maladie qui l'a\nplongé dans le comas.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						

					this.may1 = this.add.image(370,900,'mayu_fenetre');
				}
				if (this.nbClick == 5){
					this.text4.setVisible(false);
					this.text5 = this.add.text(30, 200, "Toi tu étais dans sa tête,\nses souvenirs plus précisement.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					this.text6 = this.add.text(30, 400, "Tu as réussi à refaire ses\nsouvenirs à la perfection\net grâce a toi..", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						

				}
				if (this.nbClick == 6){
					this.text5.setVisible(false);
					this.text6.setVisible(false);
					this.text7 = this.add.text(30, 200, "Elle a enfin ouvert les yeux.\nGrâce aux souvenirs de ses\namis elle s'est enfin réveillé,\ngrâce à toi.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					//this.text8 = this.add.text(30, 400, "Tu as réussi à refaire ses\nsouvenirs à la perfection\net grâce a toi..", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					this.may2 = this.add.image(370,900,'mayu_top');
					this.may1.setVisible(false);
				}
				if (this.nbClick == 7){
					this.text7.setVisible(false);
					this.text8 = this.add.text(30, 200, "Je n'imagine pas\nce qui ce serait passer\nsi tu avais échoué..", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					//this.text8 = this.add.text(30, 400, "Tu as réussi à refaire ses\nsouvenirs à la perfection\net grâce a toi..", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					
				}
				if (this.nbClick == 8){
					this.text8.setVisible(false);
					this.text9 = this.add.text(30, 200, "Au fait, tu dois te demander\nqui te parle depuis le début.\n", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					
				}
				if (this.nbClick == 9){
					this.text9.setVisible(false);
					this.text10 = this.add.text(30, 200, "Eh bien c'est moi Mayu,\nbah oui tu es dans ma tête\nça peut que être moi !:)", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
					this.may2.setVisible(false);						
					this.may4 = this.add.image(370,900,'mayu_amis');
				}
				if (this.nbClick == 10){
					this.text10.setVisible(false);
					this.text11 = this.add.text(260, 400, "Merci.", {'font': '60px', fill: '#fff'}).setScrollFactor(0);						
					this.may4.setVisible(false);
				}
				if (this.nbClick == 10){
					this.scene.start('Scene_0',{vie:this.vie});
				}

			}, this);
			
			
			

	}

	update(){
		
	}
}