import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  ROLLDICE_BUTTON,
  ROLLDICE_IMG,
  EQUIVALENT_TO_BUTTON,
  EQUIVALENT_MORE_FOOD_NUM,
} from '../utils/styles'

const diceRollImgFile = (num) => {
  return `${num}.png`
}

const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

let isRolling = false

Page({
  build() {
    // const diceNum = hmUI.createWidget(hmUI.widget.TEXT, {
    //   ...EQUIVALENT_MORE_FOOD_NUM,
    //   y: 100,
    //   text: `${diceRoll}`,
    // })

    const diceNum = hmUI.createWidget(hmUI.widget.IMG, {
      src: '1.png',
      ...ROLLDICE_IMG
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BACK_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/index',
        })
      },
    })

    // Timer for dice roll animation
    
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...ROLLDICE_BUTTON,
      click_func: () => {
        vibrate.stop()
        vibrate.scene = 27
        vibrate.start()

        diceRoll = Math.floor(Math.random() * 6) + 1
        diceNum.setProperty(hmUI.prop.MORE, {
          src: diceRollImgFile(diceRoll)
        })
      },
    })
  },
  onDestroy() {
    vibrate && vibrate.stop()
  }
})
