import { IHttp } from "@/Domain/utilities/http/IHttp"
import axios from "axios"

export default class Http implements IHttp {
  defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  }

  async get<T>(url: string, headers: any = this.defaultHeaders): Promise<any> {
    return await axios.get(url, headers)
  }

  async post<T>(
    url: string,
    data: any,
    headers = this.defaultHeaders
  ): Promise<any> {
    return await axios.post(url, {
      data,
      headers,
    })
  }

  async put<T>(
    url: string,
    data: any,
    headers = this.defaultHeaders
  ): Promise<any> {
    return await axios.put(url, {
      data,
      headers,
    })
  }

  async delete<T>(url: string, headers = this.defaultHeaders): Promise<any> {
    return await axios.delete(url, {
      headers,
    })
  }
}
