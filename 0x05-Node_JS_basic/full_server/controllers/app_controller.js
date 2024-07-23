class app_controller {
    static getHomepage(request, response) {
      response.send(200, 'Hello Holberton School!');
    }
  }
  
  export default app_controller;