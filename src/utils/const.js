// const
const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYmlsbGNoZW4yayIsImEiOiJja3R2MDBwNWgyNDljMnBvMmdzbnU0dTZ5In0.To49SgD0gHYceQ8Ap2BG3g';
const MUNICIPALITY_CITIES_ARR = [
  '北京市',
  '上海市',
  '天津市',
  '重庆市',
  '香港特别行政区',
  '澳门特别行政区',
];

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = false;
const USE_ANIMATION_FOR_GRID = true;
const CHINESE_INFO_MESSAGE = (yearLength, year) => {
  const yearStr = year === 'Total' ? '所有' : ` ${year} `;
  return `我用 App 记录自己跑步 ${yearLength} 年了，下面列表展示的是 ${yearStr} 的数据`;
};
const ENGLISH_INFO_MESSAGE = (yearLength, year) =>
  `I have been running with Apple Health and Strava for ${yearLength} ${
    yearLength > 1 ? 'years' : 'year'
  }. The following table shows my running activities in ${year}.`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
  '我跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '不要停下来，不要停下奔跑的脚步';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程马拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程马拉松' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '清晨跑步' : 'Morning Run';
const MIDDAY_RUN_TITLE = IS_CHINESE ? '午间跑步' : 'Midday Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '午后跑步' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '傍晚跑步' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '夜晚跑步' : 'Night Run';

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = true;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.35;

const RUN_TITLES = {
  FULL_MARATHON_RUN_TITLE,
  HALF_MARATHON_RUN_TITLE,
  MORNING_RUN_TITLE,
  MIDDAY_RUN_TITLE,
  AFTERNOON_RUN_TITLE,
  EVENING_RUN_TITLE,
  NIGHT_RUN_TITLE,
};

export {
  CHINESE_LOCATION_INFO_MESSAGE_FIRST,
  CHINESE_LOCATION_INFO_MESSAGE_SECOND,
  MAPBOX_TOKEN,
  MUNICIPALITY_CITIES_ARR,
  IS_CHINESE,
  INFO_MESSAGE,
  RUN_TITLES,
  USE_ANIMATION_FOR_GRID,
  USE_DASH_LINE,
  LINE_OPACITY,
};

const nike = 'rgb(130, 226, 255)'; // if you want change the main color change here src/styles/variables.scss
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
