## Request Header Parser Microservice API
By Brandon Roth

This is a microservice API project for Free Code Camp that returns a JSON object with the user's ip address, language, and operating system.

You can test it at [https://brandonr-header-micro.herokuapp.com/] (https://brandonr-header-micro.herokuapp.com/)

### Usage:

```
[https://brandonr-header-micro.herokuapp.com/api/whoami]
```

### Sample Output:

```javascript
{
  "ipaddress": "your public ip address",
  "language": "en-US",
  "software": "Windows NT 10.0; WOW64"
}
```

### Running this project
Simply launch it with node using `npm run start` or `node server.js`