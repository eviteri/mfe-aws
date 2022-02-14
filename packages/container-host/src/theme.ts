export const colors = {
  error: '#C63527',
  lightError: '#F9EBE9',
  heavyInfo: '#34657F',
  info: '#0072AD',

  success: '#3E8529',
  lightSuccess: '#f0faee',

  darkWarning: '#CAA416',
  warning: '#FBC600',
  lightWarning: '#F0D675',

  caution: '#F0FAEE',
  icon: '#AA8300',

  lightSeafoam: '#DEEAEB',
  lightBlue: '#E6F2F3',

  white: '#FFFFFF',
  lightestGrey: '#F6F6F6',
  lightGrey: '#E0E0E0',
  heavyGrey: '#9E9E9E',
  mediumGrey: '#656565',
  borderGrey: '#979797',
  steelGrey: '#3B3C43',
  grey: '#cdcdcd',
  black: '#333333',
  orange: '#D76B00',
  cautionBorder: '#A88119',
  cautionBackground: '#FFEFC4',
  mercury: '#FAFAFA'
}

const theme = {
  body: '#333333',
  link: '#34657F',
  icon: '#34657F',
  focus: '#005fcc',
  hoverBackground: '#EEF6F7',
  progressBar: {
    background: '#F6F6F6',
    inProgress: '#3E8529',
    complete: '#3E8529'
  },
  button: {
    primary: {
      text: '#FFFFFF',
      hover: '#2A5166',
      active: '#244759'
    },
    // text and icon color -- font-size
    secondary: {
      text: '#34657F',
      hover: '#EBF0F2',
      active: '#D6E0E5'
    },
    // text and icon color -- font-size
    background: '#34657F' // sets bg and border
  },
  field: {
    icon: '#34657F',
    focus: '#34657F',
    label: '#34657F',
    background: '#EEF6F7' // for select
  },
  // selects/textfields/textarea
  checkbox: {
    border: '#34657F',
    background: '#34657F',
    font: '#FFFFFF'
  },
  chip: {
    hover: '#ffe5ad',
    text: '#34657F',
    selected: '#EAEFF2'
  },
  switch: {
    background: '#34657F'
  },
  radio: {
    border: '#3E8529',
    background: '#3E8529',
    inactiveBorder: '#757575',
    focusBackground: '#c3c4c5'
  },
  navigation: {
    activeTabText: '#34657F',
    activeTabBorder: '#34657F',
    dropdownHover: '#EEF6F7'
  },
  datepicker: {
    dueDate: '#CDE5E7',
    selectedDate: '#34657F',
    selectedDateText: '#FFFFFF'
  },
  tooltip: {
    // this is consumed through component vs through theme provider
    borderColor: '#333333',
    backgroundColor: '#FFFFFF',
    color: '#333333'
  },
  footer: {
    background: '#3B3C43',
    text: '#E9EAEB',
    link: '#E9EAEB',
    border: ''
  },
  header: {
    background: '#F6F6F6',
    // headerBackground
    text: '',
    border: '' // just dsecurity: headerDivider
  },
  loader: '#34657F',
  // this is consumed through component vs through theme provider
  progressStepBar: {
    fill: '#34657F',
    hover: '#D6E0E5',
    label: '#34657F'
  },
  toasts: {
    warning: {
      font: '#B08B00',
      icon: '#B08B00',
      iconBackground: '#FBC600',
      background: '#FEF4CC'
    },
    success: {
      font: '#3E8529',
      icon: '#2B5D1D',
      iconBackground: '#3E8529',
      background: '#ECF3EA'
    },
    info: {
      font: '#34657F',
      icon: '#244759',
      iconBackground: '#34657F',
      background: '#EEF6F7'
    },
    error: {
      font: '#C63527',
      icon: '#8B251B',
      iconBackground: '#C63527',
      background: '#F9EBE9'
    }
  },
  messaging: {
    warning: {
      font: '#B08B00',
      background: '#FFF9E6'
    },
    success: {
      font: '#3E8529',
      background: '#ECF3EA'
    },
    info: {
      font: '#34657F',
      background: '##EEF6F7'
    },
    error: {
      font: '#C63527',
      background: '#FFF9E6'
    }
  },
  alertBar: {
    warning: {
      font: '#333333',
      background: '#FBC600'
    },
    success: {
      font: '#333333',
      background: '#D8E7D4'
    },
    info: {
      font: '#333333',
      background: '#CDE5E7'
    },
    default: {
      font: '#333333',
      background: '#F4F4F4'
    }
  },
  dataTable: {
    hover: '#f7fafc'
  },
  messageBox: {
    warning: {
      border: '#B08B00',
      icon: '#B08B00',
      font: '#333333',
      background: '#FEF4CC'
    },
    success: {
      border: '#3E8529',
      icon: '#3E8529',
      font: '#333333',
      background: '#ECF3EA'
    },
    info: {
      border: '#34657F',
      icon: '#34657F',
      font: '#333333',
      background: '#EEF6F7'
    },
    error: {
      border: '#C63527',
      icon: '#C63527',
      font: '#333333',
      background: '#F9EBE9'
    }
  },
  accordion: {
    borderColor: '#e2e2e2',
    headerBackgroundColor: '#ffffff',
    activeHeaderBackgroundColor: '#f5f5f5'
  }
}

export default theme
