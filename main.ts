let grupo = 0
basic.showNumber(grupo)
radio.setGroup(grupo)
joystickbit.initJoystickBit()
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.setGroup(1)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.setGroup(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.setGroup(3)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        radio.setGroup(4)
    } else {
        radio.setGroup(5)
    }
})
