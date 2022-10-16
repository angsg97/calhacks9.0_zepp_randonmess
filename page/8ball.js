import { gettext } from 'i18n'

import {
  BACK_BUTTON,
  ROLLDICE_BUTTON,
  ROLLDICE_IMG,
  EIGHT_BALL_IMG,
  TITLE_TEXT,
} from '../utils/styles'

const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
const wear = hmSensor.createSensor(hmSensor.id.WEAR)

let isRolling = false
let num = 0

const eightBallResponses = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
]

Page({
  build() {
    // const diceNum = hmUI.createWidget(hmUI.widget.TEXT, {
    //   ...EQUIVALENT_MORE_FOOD_NUM,
    //   y: 100,
    //   text: `${diceRoll}`,
    // })

    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      ...TITLE_TEXT,
      text: 'Play Game',
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...ROLLDICE_BUTTON,
      click_func: () => {
        isRolling = true

        vibrate.stop()
        vibrate.scene = 28
        vibrate.start()

        num = 1
        text.setProperty(hmUI.prop.MORE, {
          text: `${num}`
        })

        const timer1 = timer.createTimer(
          100,
          500,
          (option) => {
            //callback
            num += 1
            text.setProperty(hmUI.prop.MORE, {
              text: `${2}`
            })
          },
          { hour: 0, minute: 0, second: 5 }
        )
        
        //Stop timer1
        timer.stopTimer(timer1)
      },
    })

    const eightBall = hmUI.createWidget(hmUI.widget.IMG, {
      ...EIGHT_BALL_IMG,
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BACK_BUTTON,
      click_func: () => {
        hmApp.gotoPage({
          file: 'page/index',
        })
      },
    })

    // Sensor for shaking
    // wear.addEventListener(hmSensor.event.CHANGE, function () {
    //   if (wear.current === 2 && !isRolling) {
    //     // Start the roll for response
    //     isRolling = true

    //     vibrate.stop()
    //     vibrate.scene = 28
    //     vibrate.start()

    //     let num = 1

    //     const timer1 = timer.createTimer(
    //       100,
    //       200,
    //       function (option) {
    //         //callback
    //         num += 1
    //         text.setProperty(hmUI.prop.MORE, {
    //           text: `${num}`
    //         })
    //       },
    //       { hour: 0, minute: 0, second: 5 }
    //     )
        
    //     //Stop timer1
    //     timer.stopTimer(timer1)
    //   }
    // })
    
    // hmUI.createWidget(hmUI.widget.BUTTON, {
    //   ...ROLLDICE_BUTTON,
    //   click_func: () => {
    //     vibrate.stop()
    //     vibrate.scene = 27
    //     vibrate.start()

    //     diceRoll = Math.floor(Math.random() * 6) + 1
    //     diceNum.setProperty(hmUI.prop.MORE, {
    //       src: diceRollImgFile(diceRoll)
    //     })
    //   },
    // })
  }
  // onDestroy() {
  //   vibrate && vibrate.stop()
  // }
})
