module.exports = {

    documentRoot:{
        opt:'-d, --document-root <documentRoot>',
        help:'DocumentRoot',
        default:'./',
        type:'string'
    },

    explorer:{
        opt:'-e, --explorer',
        help:'Directory listing',
        default:'false',
        type:'boolean'
    },

    listeningPort:{
        opt:'-l, --listening-port <listeningPort>',
        help:'Listening port',
        default:'8443',
        type:'port'
    },

    interface:{
        opt:'-i, --interface <interfaceRegexp>',
        help:'Network interface filter (regular expression)',
        default:'/wi-fi|eth0/i',
        type:'regexp'
    },

    openBrowser:{
        opt:'-o, --open-browser',
        help:'Open the browser',
        default:'false',
        type:'boolean'
    },

    configFile:{
        opt:'-c, --config-file <configFile>',
        help:'Configuration file',
        default:'./devsrv.config.json',
        type:'string'
    },

    build:{
        opt:'-b, --build',
        help:'trigger build process',
        default:'false',
        type:'boolean'
    },

    buildDst:{
        opt:'--build-dst <buildDst>',
        help:'build dist directory',
        default:'./dist/1.0.0/',
        type:'string'
    },

    buildSrc:{
        opt:'--build-src <buildSrc>',
        help:'build src directory',
        default:'./public',
        type:'string'
    }

};
