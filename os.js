const os = require('os');
const {
  freemem,
  totalmem,
  loadavg,
  hostname,
  type,
  uptime,
  version,
  userInfo,
} = os;

console.log({
  free_memory: freemem(),
  total_memory: totalmem(),
  load_average: loadavg(),
  hostname: hostname(),
  type: type(),
  uptime: uptime(),
  version: version(),
  userInfo: userInfo(),
});
