input.onButtonPressed(Button.A, function () {
    hit_points += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(hit_points)
})
input.onButtonPressed(Button.B, function () {
    sleep += 4
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
})
let hit_points = 0
hit_points = 10
let sleep = 10
basic.forever(function () {
    basic.showLeds(`
        . # . . .
        # # . . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # #
        . # # # .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # #
        . # # # .
        # . . . #
        . . . . .
        `)
    if (hit_points == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . . # #
            . . . # .
            `)
        basic.pause(2000)
        basic.showString("KO!")
    }
})
basic.forever(function () {
    hit_points += -1
    sleep += -1
    basic.pause(2000)
})
