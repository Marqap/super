let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`BootSplash`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let statusbar = 0
for (let index = 0; index < 100000; index++) {
    let issue = 0
    if (issue == 1) {
        pause(500)
        scene.setBackgroundImage(assets.image`RecScreen`)
        if (controller.A.isPressed() == "true") {
            game.splash("Press A to do a System Restore, restart to quit this dialog.")
            scene.setBackgroundImage(assets.image`NullScreen`)
            mySprite = sprites.create(assets.image`NullScreen`, SpriteKind.Text)
            characterAnimations.loopFrames(
            mySprite,
            assets.animation`RestoreSplash`,
            randint(1000, 60000),
            characterAnimations.rule(Predicate.NotMoving)
            )
        }
    }
}
