import modifiedAxios from "../interceptors/axios.interceptor";

export class ApiService {
  public async get(url: string) {
    const { data: response } = await modifiedAxios.get(url);
    return response;
  }

  public async post(data: any, url: string) {
    const { data: response } = await modifiedAxios.post(url, data);
    return response;
  }

  public async postFile(data: any, url: string) {
    const { data: response } = await modifiedAxios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }
  public async put(data: any, url: string) {
    const { data: response } = await modifiedAxios({
      method: "PUT",
      url: `${url}`,
      data,
    });

    return response;
  }


  public async patch(data: any, url: string) {
    const { data: response } = await modifiedAxios({
      method: "PATCH",
      url: `${url}`,
      data,
    });

    return response;
  }

  public async delete(data: any, url: string) {
    const { data: response } = await modifiedAxios({
      method: "DELETE",
      url: `${url}`,
      data,
    });

    return response;
  }
}
