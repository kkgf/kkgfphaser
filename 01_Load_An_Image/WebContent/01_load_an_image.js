
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

var text;
var counter = 0;

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('einstein', 'assets/pics/ra_einstein.png');

}

function create() {

/*sample1
	// displays preloaded image on-screen
    game.add.sprite(0, 0, 'einstein');*/
/*sample2*/
	// add image
	var image = game.add.image(game.world.centerX, game.world.centerY, 'einstein');
	
	// move image anchor to middle, so it centers properly
	image.anchor.set(0.5);
	
    // enable all kinds of input
	image.inputEnabled = true;
	
	// set text params
	text = game.add.text(250, 16, '', { fill : "#ff0044" });
	
	// display on event
	image.events.onInputDown.add(listener, this);
/*sample3*/
	var image = game.add.sprite(0, 0, 'einstein');
game.physics.enable(image, Phaser.Physics.ARCADE);
image.body.velocity.x = 150;
}

function listener (){
	counter++;
	text.text = "You clicked " + counter + " times!";
}