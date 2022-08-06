const os = require('os');

const { arch, platform, totalmem, freemem } = os;

setInterval(() => {
const totalRAM = parseInt(totalmem() /1024 /1024);
const freeRAM = parseInt(freemem() / 1024 /1024);
const usageRAM = ((freeRAM / totalRAM) * 100).toFixed(2);

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${totalRAM}MB`,
    FreeRAM: `${freeRAM}MB`,
    Usage: `${usageRAM}%`,
  }

  console.clear();
  console.table(stats);

  exports.stats = stats;
}, 1000);

