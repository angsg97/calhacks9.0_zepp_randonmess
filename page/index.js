import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  EQUIVALENT_TO_BUTTON,
  EQUIVALENT_MORE_FOOD_NUM,
} from '../utils/styles'

Page({
  build() {
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...EQUIVALENT_MORE_FOOD_NUM,
      text: 'Play Game',
    })
    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...EQUIVALENT_TO_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/page1',
        })
      },
    })
  }
})
