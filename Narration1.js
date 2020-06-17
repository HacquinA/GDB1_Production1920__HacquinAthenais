class Narration1 extends Phaser.Scene{
	constructor (){
		super("Narration_1");
	}


	init(data){
    	this.vie= data.vie;

    }

	preload(){
		this.load.image('chambre','Assets/chambreMayu.png');
		this.load.image('reveil1','Assets/reveil1.png');
		this.load.image('reveil2','Assets/reveil2.png');


	}

	create(){
		this.chambre = this.add.image(370,640,'chambre');
		this.reveil1 = this.add.image(370,640,'reveil1').setVisible(false);
		this.reveil2 = this.add.image(370,640,'reveil2').setVisible(false);

		
	this.text = this.add.text(20, 100, " Voici Mayu, une petite démone, \nMayu est passionnée de nombreuses \nchoses \comme par exemple\n...dormir !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);


		//clique souris 

		this.nbClick = 0;

			this.input.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);
				if(this.nbClick == 1){
					this.chambre.setVisible(false);
					this.text.setVisible(false);
					this.reveil1.setVisible(true);
					this.text1 = this.add.text(20, 100, " Il arrive que sa passion\n pour son lit lui pose quelques \n soucis..", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
				
				}
				if (this.nbClick==2){
					this.text1.setVisible(false);
					this.reveil1.setVisible(false);
					this.reveil2.setVisible(true);
					this.text2 = this.add.text(20, 1100, "Comme par exemple d'être en\nretard à son rendez-vous avec son amie\nSaiya pour le bento.", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
				}
				if (this.nbClick == 3){
					this.text2.setVisible(false);
					this.text3 = this.add.text(20, 1100, "Dépêche toi de la rejoindre !!\nMais attention aux obstacles !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
				}
				if (this.nbClick == 4){
					this.text3.setVisible(false);
					this.text4 = this.add.text(20, 85, "Mayu est agile! Tu peux sauter\n(flèche du haut), double sauter\n(double clique flèche du haut)et\nmême glisser(flèche du bas)\nmais pas à l'infinis attention!", {'font': '30px', fill: '#fff'}).setScrollFactor(0);
					this.text5 = this.add.text(105, 1010, "Allez c'est partis !\n", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text6 = this.add.text(105, 1100, "(pour chaque mini-jeu tu peux\nrecommencer autant que tu veux\ntemps que cela reste dans le\ntemps imparti(barre rouge en haut\nde l'ecran) à la fin du timer\ntu perdras une vie, ainsi de suite\njusqu'a ce que tu n'ai plus de vie)", {'font': '20px', fill: '#fff'}).setScrollFactor(0);

				}
				if (this.nbClick == 5){
					this.scene.start('Scene_1',{vie:this.vie});
				}

			}, this);
			
			
			

	}

	update(){
		
	}
}