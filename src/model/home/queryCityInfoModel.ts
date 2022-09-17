import type QueryCityInfo from "@/api/QueryCityInfo";
import doGet from "@/hook/useRequest";
import UserAuth from "@/config/UserAuth";
import BaseUrl from "@/config/BaseUrl";


const userKey = UserAuth.USER_KEY;
const userLocation: string = "";
const queryCityInfUrl = BaseUrl.BASE_URL

export default  function queryCityInfoModel() {
    const { loading, result, errorMsg } = doGet<QueryCityInfo[]>(queryCityInfUrl,{
        "key": userKey,
        "location": "北京",
        "adm": "",
        "range": "",
        "number": 1,
        "lang": ""
    })

    return { loading, result, errorMsg }
}
console.log(queryCityInfoModel().result)