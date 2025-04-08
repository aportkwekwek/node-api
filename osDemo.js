import os, { userInfo } from "os";

const osInfo = {
  platform: os.platform(),
  release: os.release(),
  userInfo: userInfo(),
  uptime: os.uptime(),
  hostname: os.hostname(),
  arch: os.arch(),
  networkInterfaces: os.networkInterfaces(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  cpus: os.cpus(),
  tmpdir: os.tmpdir(),
  homedir: os.homedir(),
  endianness: os.endianness(),
  loadavg: os.loadavg(),
  constants: os.constants,
  priority: os.constants.priority,
};

console.log("OS Information:", osInfo);
