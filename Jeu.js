 var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scene: [Scene0,Transition,Scene2, Scene1,GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },          
            debug: true
        }
    }
    
};

var game = new Phaser.Game(config);


