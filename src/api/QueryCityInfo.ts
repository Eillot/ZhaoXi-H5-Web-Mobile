/**
 * @description 城市信息查询接口入参
 * 接口文档地址：https://dev.qweather.com/docs/api/geo/city-lookup/
 * 属性加问号表示该属性为可选属性，非必须
 */
export  default interface QueryCityInfo{
    key: String,
    location: String,
    adm?: String,
    range?: String,
    number?: Number,
    lang?: String
   
}