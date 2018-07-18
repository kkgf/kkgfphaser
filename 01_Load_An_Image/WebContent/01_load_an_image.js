
/*sample1-3, 5-6
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });*/
/*sample4, 7
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });*/
/*sample8*/
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
	/*sample7
	game.forceSingleUpdate = true;*/

    //  You can fill the preloader with as many assets as your game requires
    game.load.image('einstein', 'assets/pics/ra_einstein.png');
	game.load.image('phaser', 'assets/pics/phaser.png');
	game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
	game.load.image('arrow', 'assets/sprites/longarrow-white.png');
}

var text;
var counter = 0;
var sprite;
var arrow;

function create() {

/*sample1
	// displays preloaded image on-screen
    game.add.sprite(0, 0, 'einstein');*/
/*sample2,6
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
	image.events.onInputDown.add(listener, this);*/
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
/*sample7
	sprite = game.add.sprite(-400, 0, 'einstein');
	game.add.tween(sprite).to( { x: 800 }, 5000, "Linear", true);*/
/*sample7*/
	game.stage.backgroundColor = '#000000';
	var labelStyle = {font : "16px courier", fill : "#00ff00", align : "center"};
	var circle = new Phaser.Circle(400, 300, 450);
	var labelCircle = new Phaser.Circle(400, 300, 530);
	var graphics = game.add.graphics(0,0);
	graphics.lineStyle(2,0x00ff00,1);
	graphics.drawCircle(circle.x, circle.y, circle.diameter);
	
	for (var a = 0; a < 360; a += 22.5){
		graphics.moveTo(400, 300);
		var p= circle.circumferencePoint(a, true);
		graphics.lineTo(p.x, p.y);
		var lp = labelCircle.circumferencePoint(a, true);
		var na = a;
		if(a>180){
			na -= 360;
		}
		var rads = String(Phaser.Math.degToRad(na)).substr(0,5);
		var info = na + "" + rads;
		var label = game.add.text(lp.x, lp.y, info, labelStyle);
		label.centerX = lp.x;
		label.centerY = lp.y;
	}
	
	arrow = game.add.sprite(game.world.centerX, game.world.centerY, 'arrow');
	arrow.anchor.set(0,0.5);
	arrow.tint = 0xff0000;
}

function listener () {
	counter++;
	text.text = "You clicked " + counter + " times! \n Now try to do better!";
}

function update () {
	/*sample4
	if(game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8){
		game.physics.arcade.moveToPointer(sprite, 300);
	}else{
		sprite.body.velocity.set(0);
	}*/
	arrow.angle += 0.2;
}

function render () {
	/*sample4
	game.debug.inputInfo(32,32);*/
    game.debug.text('Sprite Rotation', 24, 32);
    game.debug.text('Angle: ' + arrow.angle.toFixed(2), 24, 64);
    game.debug.text('Rotation: ' + arrow.rotation.toFixed(2), 24, 96);
}