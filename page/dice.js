import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  ROLLDICE_BUTTON,
} from '../utils/styles'

const diceRollImgFile = (num) => {
  return `dice/${num}.png`
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
      src: 'dice/1.png',
      x: 125,
      y: 70
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BACK_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/index',
        })
      },
    })
    
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...ROLLDICE_BUTTON,
      click_func: () => {
        vibrate.stop()
        vibrate.scene = 28
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
