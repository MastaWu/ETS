module.exports = (function() {
	var config = {};
    config.database = {};
    config.secret = "";
    config.facebook = {};
    config.instagram = {};
    config.aws = {};

	switch(process.env.NODE_ENV) {
		default:
            config.database = {
                host: 'gnomapp.cyo2amxiirsd.us-west-2.rds.amazonaws.com',
                port: '3306',
                user: 'ets',
                password: 'hackathon',
                database: 'ets'
            };
        return config;
	}
})();