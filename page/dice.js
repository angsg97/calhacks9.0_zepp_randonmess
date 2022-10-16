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

    // Sparkle Animation
    const imgAnimation = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
      anim_path: 'starz',
      anim_prefix: 'starz',
      anim_ext: 'png',
      anim_fps: 30,
      anim_size: 16,
      repeat_count: 0,
      anim_status: 3,
      x: 0,
      y: 0,
      anim_complete_call: () => {
        console.log('animation complete')
      }
    })

    imgAnimation.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.START)
    imgAnimation.addEventListener(hmUI.event.CLICK_DOWN, () => {
      const isRunning = imgAnimation.getProperty(hmUI.prop.ANIM_IS_RUNINNG)

      if (!isRunning) {
        imgAnimation.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.START)
      }
    })

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
