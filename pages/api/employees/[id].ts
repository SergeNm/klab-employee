// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const getEmployee = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const employee = await getEmployee.json();
  res.status(200).json(employee);
}
