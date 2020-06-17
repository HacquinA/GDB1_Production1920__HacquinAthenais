 var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scene: [Scene0,Narration1,Transition,Scene1,Narration2,Transition2,Scene2,Narration3,Transition3,Scene3,Narration4,GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },          
            debug: false
        }
    }
    
};

var game = new Phaser.Game(config);


