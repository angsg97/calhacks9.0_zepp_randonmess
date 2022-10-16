import { gettext } from 'i18n'

const BUTTON_PRESETS = {
    text: gettext(''),
    press_color: 0x333333,
    normal_color: 0x1a1a1a,
    x: px(108),
    y: px(0),
    w: px(264),
    h: px(56),
    color: 0xffffff,
    text_size: px(32),
    radius: px(28),
}

const CENTER_SCREEN_LIST_BUTTON = {
    w: px(120),
    x: px(233-120/2),
}

export const BACK_BUTTON = {
    ...BUTTON_PRESETS,
    text: gettext('Back'),
    y: px(376),
}

export const PLAY_DICE_GAME_BUTTON = {
    ...BUTTON_PRESETS,
    ...CENTER_SCREEN_LIST_BUTTON,
    text: gettext('Dice'),
    y: px(160),
    text_size: px(28),
}

export const FLIP_COIN_BUTTON = {
    ...BUTTON_PRESETS,
    ...CENTER_SCREEN_LIST_BUTTON,
    text: gettext('Coin'),
    y: px(100),
    text_size: px(28),
}

export const ROLLDICE_BUTTON = {
    ...BUTTON_PRESETS,
    text: gettext('Roll Dice'),
    y: px(300),
}

export const TITLE_TEXT = {
    text: '',
    x: px(152),
    y: px(20),
    w: px(375),
    h: px(80),
    color: 0xee801e,
    text_size: px(55),
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V,
}

/**
 * 8 BALL
 */

export const EIGHT_BALL_BUTTON = {
    ...BUTTON_PRESETS,
    ...CENTER_SCREEN_LIST_BUTTON,
    text: gettext('8 Ball'),
    y: px(220),
    text_size: px(28),
}

export const FOOD_BUTTON = {
    ...BUTTON_PRESETS,
    ...CENTER_SCREEN_LIST_BUTTON,
    text: gettext('Food'),
    y: px(280),
    text_size: px(28),
}

export const SPORTS_BUTTON = {
    ...BUTTON_PRESETS,
    ...CENTER_SCREEN_LIST_BUTTON,
    y: px(340),
    text_size: px(28),
}

export const EIGHT_BALL_IMG = {
    src: '8ball.png',
    x: 125,
    y: 70,
}

export const EIGHT_BALL_TEXT = {
    text: 'Ask me a Question',
    x: px(100),
    y: px(50),
    w: px(300),
    h: px(80),
    color: 0xee801e,
    text_size: px(32),
    align_h: hmUI.align.LEFT,
    align_v: hmUI.align.CENTER_V,
}