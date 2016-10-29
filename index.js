/*
 * fis.baidu.com
 */

'use strict';


module.exports = function(options, modified, total, next) {
  if (!options.path) return;

  modified.forEach(function(file) {
    if (file.isText() || typeof(file.getContent()) === 'string') {
      var content = file.getContent();

      var result = content;

      for(var i=0,len=options.path.length;i<len;i++){
        if(!fis.get(options.path[i]))continue;
        result = result.replace(options.path[i], fis.get(options.path[i]));
      }

      file.setContent(result);
      if (result !== content) {
        console.log('Replace path %s in file [%s]', options.path, file);
      }
    }
  });
  next();
};
