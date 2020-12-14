module.exports = {
    "apps": [{
        "name": "ws-lp",
        "script": "./bin/www",
        "exec_mode": "cluster",
        "watch": false,
        "instances": 1,
        "instance_id_env": "NODE_APP_INSTANCE",
        "error_file": "logs/error.log",
        "out_file": "logs/out.log",
        "merge_logs": true,
        "env": {
            "PORT": 2000,
            "NODE_ENV": "development",
            "NODE_OPTIONS": "--inspect --inspect-port=9232"
        },
        "env_production": {
            "PORT": 2000,
            "NODE_ENV": "production",
            "autorestart": false
        }
    }]
}