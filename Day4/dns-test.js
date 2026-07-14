const dns = require("node:dns").promises;

async function test() {
  try {
    const records = await dns.resolveSrv(
      "_mongodb._tcp.learnbackend.mjtlrda.mongodb.net"
    );
    console.log(records);
  } catch (err) {
    console.error(err);
  }
}

test();