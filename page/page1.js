import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  ROLLDICE_BUTTON,
  EQUIVALENT_TO_BUTTON,
  EQUIVALENT_MORE_FOOD_NUM,
} from '../utils/styles'

let diceRoll = 0

Page({
  build() {
    const diceNum = hmUI.createWidget(hmUI.widget.TEXT, {
      ...EQUIVALENT_MORE_FOOD_NUM,
      y: 100,
      text: `${diceRoll}`,
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
        diceRoll = Math.floor(Math.random() * 6)
        diceNum.setProperty(hmUI.prop.MORE, {
          text: `${diceRoll}`
        })
      },
    })
  }
})
