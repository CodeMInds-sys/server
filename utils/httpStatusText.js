// HttpStatusTexts.js

class HttpStatusTexts {
    // Success Status Texts
    static SUCCESS = "Success";
    static CREATED = "Created";
    static NO_CONTENT = "No Content";
  
    // Fail Status Texts
    static BAD_REQUEST = "Bad Request";
    static UNAUTHORIZED = "Unauthorized";
    static FORBIDDEN = "Forbidden";
    static NOT_FOUND = "Not Found";
    static METHOD_NOT_ALLOWED = "Method Not Allowed";
    static CONFLICT = "Conflict";
  
    // Error Status Texts
    static INTERNAL_SERVER_ERROR = "Internal Server Error";
    static NOT_IMPLEMENTED = "Not Implemented";
    static BAD_GATEWAY = "Bad Gateway";
    static SERVICE_UNAVAILABLE = "Service Unavailable";
  }
  
  module.exports = HttpStatusTexts;
  