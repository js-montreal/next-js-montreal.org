const crypto = require('crypto')

export default (email) => {
  let hash = crypto.createHash('md5');
	hash.update(email, 'utf8');
	return `http://www.gravatar.com/avatar/${hash.digest('hex')}`
};