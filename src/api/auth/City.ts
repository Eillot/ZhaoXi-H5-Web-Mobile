export default class City{
    
    /**
     * key :请求接口token,存在有效期，过期失效
     * location:查询地区名称，可以地区名称、经纬度（横纵坐标使用逗号隔开）
     */
    key: string
    location: string

    /**
     * City实体类构造函数
     * @param key 
     * @param location 
     */
    constructor(key:string,location:string){
        this.key=key
        this.location=location
    }

}