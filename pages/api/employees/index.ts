// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const getEmployees = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const employees = await getEmployees.json();
  res.status(200).json(employees);
}
