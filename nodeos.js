const { get } = require('http');
const os = require('os');
let release=os.release();
let platform=os.platform();
let arc=os.arch();
let hostName=os.hostname();
let freeMem=os.freemem();
let homeDir=os.homedir()
let cpus=os.cpus();
let loadavg=os.loadavg();
let getPriority=os.getPriority();
let networkInterfaces=os.networkInterfaces();
console.log(`${release} ${platform} ${arc} ${hostName} ${freeMem} ${homeDir} ${networkInterfaces}
${cpus} ${loadavg} ${getPriority}` );

