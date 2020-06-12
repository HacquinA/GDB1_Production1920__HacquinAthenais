 var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scene: [Scene0,Scene1],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },          
            debug: true
        }
    }
    
};

var game = new Phaser.Game(config);


