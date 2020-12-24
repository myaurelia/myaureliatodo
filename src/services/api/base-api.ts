import { HttpClient } from "aurelia-fetch-client";
import * as toastr from 'toastr';

export class BaseApi {

  protected generateApiClient(baseUrl: string): HttpClient {
    const api = new HttpClient();
    if (baseUrl.length > 0 && baseUrl.slice(-1) != '/') {
      baseUrl += '/';
    }

    api.configure(config => {
      config.withBaseUrl(`${baseUrl}`)
        .useStandardConfiguration()
        .withDefaults({
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor({
          response(response) {
            console.log(`Recieved ${response.status} ${response.url}`);
            return response;
          },
          responseError(error, request, response) {
            if (error.status > 204) {
              toastr.error(`Api Error`);
            }
            console.error({ error });
            return Promise.reject(error);
          }
        });
    });
    return api;
  }

  protected generateQueryString(filter, appendToExisting: boolean): string {
    let result: string = "";
    let isFirst = !appendToExisting;
    for (const property in filter) {
      const value = filter[property];
      if (value !== undefined) {
        result += `${isFirst ? "" : "&"}${property}=${encodeURIComponent(value)}`;
        isFirst = false;
      }
    }

    return result;
  }
}
