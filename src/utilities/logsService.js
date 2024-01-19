import * as logsAPI from "./logsAPI";

export async function getLogs() {
  const logs = await logsAPI.getLogs();
  return logs;
}