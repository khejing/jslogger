import {LOGURL} from './config.js';
import Log4js from 'log4js-dist';
import {isWeChat, isAndroid, isiPhone} from 'ua.js';

function getLogger(){
  //微信优先
  if(isWeChat()){
    return new Log4js.getLogger("WeChat");
  }
  if(isAndroid()){
    return new Log4js.getLogger('Android');
  }
  if(isiPhone()){
    return new Log4js.getLogger('iPhone');
  }
  return new Log4js.getLogger("Desktop")
}

let logger = getLogger();

let jsonLayout = new Log4js.JSONLayout();

let ajaxAppender = new Log4js.AjaxAppender(LOGURL+"/inputs/d00dadc0ffee");
ajaxAppender.setLayout(jsonLayout);
logger.addAppender(ajaxAppender);

let consoleAppender = new Log4js.BrowserConsoleAppender();
consoleAppender.setLayout(jsonLayout);
logger.addAppender(consoleAppender);

logger.setDateFormat("yyyy-MM-ddthh:mm:ss.SSSO");
logger.setLevel(Log4js.Level.DEBUG);

export default logger;
