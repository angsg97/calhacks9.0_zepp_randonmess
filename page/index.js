import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  PLAY_DICE_GAME_BUTTON,
  TITLE_TEXT,
  FLIP_COIN_BUTTON,
  EIGHT_BALL_BUTTON,
  FOOD_BUTTON,
  SPORTS_BUTTON,
} from '../utils/styles'

Page({
  build() {
    // Title
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TITLE_TEXT,
      text: 'Xplore',
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

    // Food Button
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...FOOD_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/food',
        })
      },
    })

    // Sports Button
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...SPORTS_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/sports',
        })
      },
    })
  }
})
