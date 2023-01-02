input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # # # . .
        # # # # #
        . # . # #
        # . . . #
        # . # # #
        `)
    soundExpression.mysterious.playUntilDone()
    basic.pause(100)
    basic.showArrow(ArrowNames.North)
    basic.showString("Ciao")
})
basic.showIcon(IconNames.Yes)
