var GetAdvancedValue = require('../utils/object/GetAdvancedValue');
var ScaleModes = require('../renderer/ScaleModes');
var BlendModes = require('../renderer/BlendModes');

var BuildGameObject = function (scene, gameObject, config)
{
    //  Position

    gameObject.x = GetAdvancedValue(config, 'x', 0);
    gameObject.y = GetAdvancedValue(config, 'y', 0);
    gameObject.z = GetAdvancedValue(config, 'z', 0);

    //  Flip

    gameObject.flipX = GetAdvancedValue(config, 'flipX', false);
    gameObject.flipY = GetAdvancedValue(config, 'flipY', false);

    //  Scale
    //  Either: { scale: 2 } or { scale: { x: 2, y: 2 }}

    var scale = GetAdvancedValue(config, 'scale', null);

    if (typeof scale === 'number')
    {
        gameObject.setScale(scale);
    }
    else if (scale !== null)
    {
        gameObject.scaleX = GetAdvancedValue(scale, 'x', 1);
        gameObject.scaleY = GetAdvancedValue(scale, 'y', 1);
    }

    //  ScrollFactor
    //  Either: { scrollFactor: 2 } or { scrollFactor: { x: 2, y: 2 }}

    var scrollFactor = GetAdvancedValue(config, 'scrollFactor', null);

    if (typeof scrollFactor === 'number')
    {
        gameObject.setScrollFactor(scrollFactor);
    }
    else if (scrollFactor !== null)
    {
        gameObject.scrollFactorX = GetAdvancedValue(scrollFactor, 'x', 1);
        gameObject.scrollFactorY = GetAdvancedValue(scrollFactor, 'y', 1);
    }

    //  Rotation

    gameObject.rotation = GetAdvancedValue(config, 'rotation', 0);

    var angle = GetAdvancedValue(config, 'angle', null);

    if (angle !== null)
    {
        gameObject.angle = angle;
    }

    //  Alpha

    gameObject.alpha = GetAdvancedValue(config, 'alpha', 1);

    //  Origin
    //  Either: { origin: 0.5 } or { origin: { x: 0.5, y: 0.5 }}

    var origin = GetAdvancedValue(config, 'origin', null);

    if (typeof origin === 'number')
    {
        gameObject.setOrigin(origin);
    }
    else if (origin !== null)
    {
        var ox = GetAdvancedValue(config, 'x', 0.5);
        var oy = GetAdvancedValue(config, 'y', 0.5);

        gameObject.setOrigin(ox, oy);
    }

    //  ScaleMode

    gameObject.scaleMode = GetAdvancedValue(config, 'scaleMode', ScaleModes.DEFAULT);

    //  BlendMode

    gameObject.blendMode = GetAdvancedValue(config, 'blendMode', BlendModes.NORMAL);

    //  Visible

    gameObject.visible = GetAdvancedValue(config, 'visible', true);

    //  Add to Scene

    var add = GetAdvancedValue(config, 'add', true);

    if (add)
    {
        scene.sys.displayList.add(gameObject);
    }

    return gameObject;
};

module.exports = BuildGameObject;
