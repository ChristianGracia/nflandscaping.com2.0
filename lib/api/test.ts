import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  test: Boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ test: true });
}
