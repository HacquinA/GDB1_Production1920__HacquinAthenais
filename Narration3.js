class Narration3 extends Phaser.Scene{
	constructor (){
		super("Narration_3");
	}


	init(data){
    	this.vie= data.vie;

    }

	preload(){

		this.load.image('chisE','Assets/chise.png');
		this.load.image('kumabo','Assets/kumabo_rit.png');
		this.load.image('hiyo','Assets/Hiyori.png');



	}

	create(){
	
	this.text = this.add.text(20, 500, "Formidable encore une réussite !\nJe te propose de passer\n à la suite !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);


		//clique souris 

		this.nbClick = 0;

			this.input.on('pointerdown', function (pointer){
				this.nbClick ++;
				console.log(this.nbClick);
				if(this.nbClick == 1){
					this.text1 = this.add.text(20, 300, "Tu vas te demander qui est la\nprochaine personne que l'on va\nrencontrer?\nEh bien je te présente Hiyori !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text.setVisible(false);
					

				}
				if (this.nbClick==2){
					this.text1.setVisible(false);
					this.text2 = this.add.text(20, 300, "D'une nature plutôt calme\nelle est à l'écoute de ses amis,\nmais quand tu l'as met devant\nun jeu vidéo\nc'est une autre personne !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.hiyo = this.add.image(370,900,'hiyo').setScale(0.5);

				}
				if (this.nbClick == 3){
					this.text2.setVisible(false);
					this.text4 = this.add.text(130, 200, "Avec Mayu elles aiment\nse défier à Tokyo Tower.\nMais c'est toujours\nHiyori qui gagne...", {'font': '35px', fill: '#fff'}).setScrollFactor(0);						
			}
				if (this.nbClick == 4){
					this.text4.setVisible(false);
					this.text5 = this.add.text(20, 85, "Pour vaincre Hiyori tu dois\nréussir à empiler parfaitement\nla tour ! Clique sur le morceau\nde tour quand tu voudras qu'il\ntombe,attention à le faire au\nbon moment !", {'font': '35px', fill: '#fff'}).setScrollFactor(0);
					this.text6 = this.add.text(20, 400, "Allez c'est partis ! CLIQUE ! ", {'font': '35px', fill: '#fff'}).setScrollFactor(0);

				}
				if (this.nbClick == 5){
					this.scene.start('Scene_3',{vie:this.vie});
				}
					

			}, this);
			
			
			

	}

	update(){
		
	}
}