if (input.buttonIsPressed(Button.A)){
    poitch.initPoitch(poitch.poitchType.poitch2)
}else{
    poitch.initPoitch(poitch.poitchType.poitch4)
}
basic.forever(function () {
    if (poitch.testSwitch(poitch.poitchSW.p8)) {
        basic.showString("8")
    } else if (poitch.testSwitch(poitch.poitchSW.p12)) {
        basic.showString("C")
    } else if (poitch.testSwitch(poitch.poitchSW.p13)) {
        basic.showString("D")
    } else if (poitch.testSwitch(poitch.poitchSW.p16)) {
        basic.showString("G")
    } else {
        basic.clearScreen()
    }
})
