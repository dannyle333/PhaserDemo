var game = new Phaser.Game(680,400, Phaser.AUTO);
game.state.add('state1.js', demo.state1);
game.state.start('state1');