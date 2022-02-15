export interface WeatherPropsDto {
  wind_speed: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  temp: number;
}

export interface FactInfoDto extends WeatherPropsDto {
  feels_like: number;
  temp_water: number;
}

export interface CityInfoDto {
  def_pressure_mm: number;
  def_pressure_pa: number;
}

export interface ForecastDto extends WeatherPropsDto {
  date: string;
}

export interface CityWeatherDto {
  now_dt: string;
  info: Required<CityInfoDto>;
  fact: Required<FactInfoDto>;
  forecasts: Required<ForecastDto>[];
}
