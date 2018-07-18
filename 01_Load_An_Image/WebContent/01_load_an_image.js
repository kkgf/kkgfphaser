
/*sample1-3
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });*/
/*sample4
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });*/
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

var text;
var counter = 0;
var sprite;

function preload() {

    //  You can fill the preloader with as many assets as your game requires
    game.load.image('einstein', 'assets/pics/ra_einstein.png');
	game.load.image('phaser', 'assets/pics/phaser.png');
	game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');

}

function create() {

/*sample1
	// displays preloaded image on-screen
    game.add.sprite(0, 0, 'einstein');*/
/*sample2,6*/
	// add image
	var image = game.add.image(game.world.centerX, game.world.centerY, 'einstein');
	
	// move image anchor to middle, so it centers properly
	image.anchor.set(0.5);
	
    // enable all kinds of input
	image.inputEnabled = true;
	
	// set text params
	style = {font : "65px Arial", fill : "#ff0044", align : "center"};
	text = game.add.text(game.world.centerX-300, 0, '', style);
	
	// display on event
	image.events.onInputDown.add(listener, this);
/*sample3 note that sprites and images have different attributes and methods
	var image = game.add.sprite(0, 0, 'einstein');
	game.physics.enable(image, Phaser.Physics.ARCADE);
	image.body.velocity.x = 150;*/
/*sample4
	game.physics.startSystem(Phaser.Physics.ARCADE);
	sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
	sprite.anchor.set(0.5);
	
	//give a physics body to the sprite
	game.physics.arcade.enable(sprite);*/
/*sample5
	var bot = game.add.sprite(200, 200, 'bot');
	bot.animations.add('run');
	bot.animations.play('run', 15, true);*/
}

function listener () {
	counter++;
	text.text = "You clicked " + counter + " times! \n Now try to do better!";
}

function update () {
	if(game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8){
		game.physics.arcade.moveToPointer(sprite, 300);
	}else{
		sprite.body.velocity.set(0);
	}
}

function render () {
	game.debug.inputInfo(32,32);
}