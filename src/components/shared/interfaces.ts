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

export interface IWeather {
  name: string
  icon: string
  temp: number
}

export interface IStateWeather {
  weather: IWeather
}
