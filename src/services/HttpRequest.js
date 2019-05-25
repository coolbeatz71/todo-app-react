/**
 * Handle all Http request to the rest api
 * @class HttpRequest
 */
class HttpRequest {
  /**
   * send a GET http request
   * @param  {string} url
   * @returns {void}
   */
  static get(url) {
    this.url = url;

    // return a promise
    return new Promise((resolve, reject) => {
      const request = new Request(this.url, {
        headers: new Headers({
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        }),
      });

      fetch(request)
        .then(response => response.json())
        .then(body => {
          resolve(body);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * send a POST http request
   * @param  {string} url
   * @param  {object} data
   * @returns {void}
   */
  static post(url, data) {
    this.url = url;
    this.data = data;

    // return a promise
    return new Promise((resolve, reject) => {
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
        body: JSON.stringify(this.data),
      };
      // add the spinner overlay

      fetch(this.url, options)
        .then(response => response.json())
        .then(body => {
          resolve(body);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * send a PUT http request
   * @param  {string} url
   * @param  {object} data
   * @returns {void}
   */
  static put(url, data) {
    this.url = url;
    this.data = data;

    // return a promise
    return new Promise((resolve, reject) => {
      const options = {
        method: 'put',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      };

      fetch(this.url, options)
        .then(response => response.json())
        .then(body => {
          resolve(body);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * send a DELETE http request
   * @param  {string} url
   * @returns {void}
   */
  static delete(url) {
    this.url = url;

    // return a promise
    return new Promise((resolve, reject) => {
      const options = {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      };

      fetch(this.url, options)
        .then(response => response.json())
        .then(body => {
          resolve(body);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default HttpRequest;
