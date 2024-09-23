let time = 0
scene.setBackgroundImage(assets.image`BootSplash`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
let statusbar = 0
for (let index = 0; index < 100; index++) {
    statusbar = statusbars.create(statusbar, 2, StatusBarKind.Health)
    statusbar = statusbar + 2
    time += randint(0, 1)
    pause(time)
}
music.play(music.createSong(assets.song`Ssound`), music.PlaybackMode.UntilDone)
