let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`BootSplash`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let statusbar = 0
for (let index = 0; index < 100000; index++) {
    if (blockSettings.readNumber("issue") < 1) {
        pause(500)
        scene.setBackgroundImage(assets.image`RecScreen`)
        if (controller.A.isPressed() == "true") {
            game.splash("Press A to do a System Restore, restart to quit this dialog.")
            scene.setBackgroundImage(assets.image`NullScreen`)
            mySprite = sprites.create(assets.image`NullScreen`, SpriteKind.Text)
            for (let index = 0; index < 60; index++) {
                characterAnimations.loopFrames(
                mySprite,
                assets.animation`RestoreSplash`,
                1000,
                characterAnimations.rule(Predicate.NotMoving)
                )
                blockSettings.writeNumber("issue", 0)
                game.reset()
            }
        }
    }
}
scene.setBackgroundImage(assets.image`HSbackground`)
blockSettings.writeNumber("Battery", 50)
let textSprite = textsprite.create("Super" + "   " + blockSettings.readNumberArray("Battery") + "%" + " Battery")
story.showPlayerChoices("Audio", "Brick")
if (story.checkLastAnswer("Audio")) {
	
} else {
    blockSettings.writeNumber("issue", 1)
    for (let index = 0; index < 20; index++) {
        music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
    game.reset()
}
