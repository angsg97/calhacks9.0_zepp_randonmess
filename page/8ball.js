import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  ROLLDICE_BUTTON,
  EIGHT_BALL_TEXT,
} from '../utils/styles'

const diceRollImgFile = (num) => {
  return `8ball/8ball${num}.png`
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
    
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...EIGHT_BALL_TEXT,
    })

    const diceNum = hmUI.createWidget(hmUI.widget.IMG, {
      src: '8ball/8ball1.png',
      x: 49,
      y: 50
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
      text: 'Shake 8Ball',
      click_func: () => {
        vibrate.stop()
        vibrate.scene = 28
        vibrate.start()

        diceRoll = Math.floor(Math.random() * 20) + 1
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
