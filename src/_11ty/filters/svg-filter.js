const fs = require('fs');
const path = require('path');

module.exports = function(filePath) {
    if (path.extname(filePath) !== '.svg') {
      throw new Error('svg filter requires .svg file extension');
    }

    const data = fs.readFileSync(filePath, function(err, contents) {
        if (err) {
          throw new Error(err)  ;
        }

        return contents
    });

    return data.toString('utf8');
}
