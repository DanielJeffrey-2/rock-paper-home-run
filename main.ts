// Input here: Paper
input.onButtonPressed(Button.A, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showString("Enemy:")
        basic.showLeds(`
            # # # # #
            # # . . #
            # . # . #
            # . . # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showString("Enemy:")
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (hand == 3) {
        basic.showString("Enemy:")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    input2 = 1
    basic.pause(1000)
    basic.showString("You:")
    basic.showLeds(`
        # # # # #
        # # . . #
        # . # . #
        # . . # #
        # # # # #
        `)
    if (hand == 3) {
        basic.showString("WIN")
        game.addScore(1)
    } else if (hand == 2) {
        basic.showString("LOSE")
        game.addScore(-1)
    } else if (hand == 1) {
        basic.showString("TIE")
    }
    basic.showString("You are at Base" + game.score())
})
// Input here: Rock
input.onButtonPressed(Button.AB, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showString("Enemy:")
        basic.showLeds(`
            # # # # #
            # # . . #
            # . # . #
            # . . # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showString("Enemy:")
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (hand == 3) {
        basic.showString("Enemy:")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    input2 = 3
    basic.pause(1000)
    basic.showString("You:")
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    if (hand == 3) {
        basic.showString("TIE")
    } else if (hand == 2) {
        basic.showString("WIN")
        game.addScore(1)
    } else if (hand == 1) {
        basic.showString("LOSE")
        game.addScore(-1)
    }
    basic.showString("You are at Base" + game.score())
})
// Input here: Scissors
input.onButtonPressed(Button.B, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showString("Enemy:")
        basic.showLeds(`
            # # # # #
            # # . . #
            # . # . #
            # . . # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showString("Enemy:")
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (hand == 3) {
        basic.showString("Enemy:")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    input2 = 2
    basic.pause(1000)
    basic.showString("You:")
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    if (hand == 3) {
        basic.showString("LOSE")
        game.addScore(-1)
    } else if (hand == 2) {
        basic.showString("TIE")
    } else if (hand == 1) {
        basic.showString("WIN")
        game.addScore(1)
    }
    basic.showString("You are at Base" + game.score())
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Setting score to 0")
    basic.pause(500)
    game.setScore(0)
})
let input2 = 0
let hand = 0
let home_run = 0
let score = 0
if (score == 4) {
    home_run += 1
    basic.showString("Nice! You have" + home_run + "home runs!")
}
