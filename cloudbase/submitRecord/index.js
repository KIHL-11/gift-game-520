const cloudbase = require("@cloudbase/node-sdk");

const app = cloudbase.init({
  env: cloudbase.SYMBOL_DEFAULT_ENV,
});

const db = app.database();

exports.main = async (event) => {
  const record = {
    pair_id: String(event.pair_id || "rongrong-520"),
    level_date: String(event.level_date || ""),
    level_title: String(event.level_title || ""),
    gift: String(event.gift || ""),
    summary: String(event.summary || ""),
    createdAt: new Date(),
  };

  if (!record.summary) {
    return { ok: false, message: "missing summary" };
  }

  const result = await db.collection("gift_records").add(record);
  return { ok: true, id: result.id };
};
