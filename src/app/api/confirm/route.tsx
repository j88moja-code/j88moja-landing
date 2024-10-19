import { handleConfirmation } from "../../lib/confirm";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return await handleConfirmation(req);
}
