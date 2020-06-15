 var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scene: [Scene0,Transition,Scene1,Transition2,Scene2,Transition3,Scene3,GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },          
            debug: true
        }
    }
    
};

var game = new Phaser.Game(config);


