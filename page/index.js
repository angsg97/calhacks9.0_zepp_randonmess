import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  PLAY_DICE_GAME_BUTTON,
  TITLE_TEXT,
  FLIP_COIN_BUTTON,
  EIGHT_BALL_BUTTON,
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

    // Title
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TITLE_TEXT,
      text: 'Play Game',
    })

    // Dice Button
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...PLAY_DICE_GAME_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/dice',
        })
      },
    })

    // Coin Flip Button
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...FLIP_COIN_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/coin',
        })
      },
    })

    // 8 Ball Button
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...EIGHT_BALL_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/8ball',
        })
      },
    })
  }
})
