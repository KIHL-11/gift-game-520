const cloudbase = require("@cloudbase/node-sdk");

const app = cloudbase.init({
  env: cloudbase.SYMBOL_DEFAULT_ENV,
});

const db = app.database();

exports.main = async (event) => {
  const pairId = String(event.pair_id || "rongrong-520");
  const result = await db
    .collection("gift_records")
    .where({ pair_id: pairId })
    .orderBy("createdAt", "desc")
    .limit(20)
    .get();

  return {
    ok: true,
    records: result.data || [],
  };
};
