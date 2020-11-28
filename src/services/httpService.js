import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
      console.log('Logging the error : ', error);
      alert('An Unexpected Error Occured !');
    }
    return Promise.reject(error);
  })

  export default {
      get : axios.get,
      post : axios.post,
      put : axios.put,
      delete : axios.delete
  }

  /** NOTE - Rushain Sovis
   * 
        So what is AXIOS?
        ==================
    Axios is basically an external library, which is used to make promise based HTTP calls(fetch made easy, plus gives us structured responses). Its one of those recommenced libraries, used with ReactJs. What people don’t really realise, it does more than making a get/post request.

        So what are interceptors and why we should use them?
        =====================================================
    Interceptors are methods which are triggered before the main method. There are two types of interceptors:
    =>request interceptor: this is called before the actual call to the endpoint is made.
    =>response interceptor: this is called before the promise is completed and the data is received by the then callback.
    Think of the interceptor as a tunnel between the request/response and actual promise.

    Interceptors can be very helpful, if used properly as it allows us to make checks and even changes even before the main method is executed.
  **/