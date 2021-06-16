input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(randint(0, 25), 1))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showString("Random Number")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.showString("Random Letter")
})
basic.showLeds(`
    . . . . .
    . # # # .
    # # . # #
    . # # # .
    . . . . .
    `)
