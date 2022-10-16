import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  PLAY_DICE_GAME_BUTTON,
  TITLE_TEXT,
} from '../utils/styles'

Page({
  build() {
    // catjam
    const imgAnimation = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
      anim_path: 'catjam',
      anim_prefix: 'cat',
      anim_ext: 'png',
      anim_fps: 30,
      anim_size: 32,
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

    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TITLE_TEXT,
      text: 'Play Game',
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...PLAY_DICE_GAME_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/dice',
        })
      },
    })
  }
})
