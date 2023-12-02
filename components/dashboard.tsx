// "use client"
import { cols, columns } from "./columns"
import { DataTable } from "./data-table"
import axios from 'axios';

 
export default async function Dashboard() {
  
  const res = await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={res?.data} />
    </div>
  )
}
