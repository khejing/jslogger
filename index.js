import {LOGURL} from './config.js';
import Log4js from 'log4js-dist';

let logger;
if(DEVICE_TYPE === 'mobile' && PLATFORM === 'android'){
    logger = new Log4js.getLogger("android");
}else{
    logger = new Log4js.getLogger("desktop")
}

let jsonLayout = new Log4js.JSONLayout();

/*let ajaxAppender = new Log4js.AjaxAppender(LOGURL+"/inputs/d00dadc0ffee");*/
//ajaxAppender.setLayout(jsonLayout);

let consoleAppender = new Log4js.BrowserConsoleAppender();
consoleAppender.setLayout(jsonLayout);

logger.setDateFormat("yyyy-MM-ddthh:mm:ss.SSSO");
logger.setLevel(Log4js.Level.DEBUG);

//logger.addAppender(ajaxAppender);
logger.addAppender(consoleAppender);

export default logger;
