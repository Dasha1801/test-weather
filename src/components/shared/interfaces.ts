export interface IInput {
  label: string;
}

export interface IHeading {
  text: string;
}

export interface IPropsBtn {
  text: string;
  onClick?: () => void;
}

export interface IStateLogIn {
  isLogin: boolean
}

interface IIcon { icon: string }


interface ITemp {
  temp: number
}

export interface IWeather {
  name: string
  weather: [IIcon]
  main: ITemp
}

export interface IStateWeather {
  weather: IWeather
}
