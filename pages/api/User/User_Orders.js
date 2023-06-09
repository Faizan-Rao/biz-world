import { prisma } from "@/script";


export default async function handler (req,res)
{
    switch(req.method)
    {
        case "GET":
            const orderResponse =  await getOrder(req)
            console.log(orderResponse)
            res.status(200).json(orderResponse)
            break;
        case "POST":
            // const response = await removeOrder(res)
            break;
    }
}

const getOrder = async (req) =>{

    try
    {
        await prisma.$connect();
        const {customer_id} = req.query;
        const id = parseInt(customer_id)
        // Get-Orders By Customer Id
        const Orders = await prisma.billing.findMany({
            where:{
                customer_id: {
                    equals: id
                }
            },
            select:{
                purchase_record: {
                    select:{
                        purchase_title:true,
                        purchase_amount: true,
                        purchase_quantity: true,
                        purchase_status: true,
                        purchase_date: true,
                    }
                },
                bill_id:true
            }
        })
       
        await prisma.$disconnect()
        return Orders
      
    }
    catch(err)
    {
        await prisma.$disconnect()
        // res.status(400).json({status: "error", message:err.message})
        console.log(err.message)
    }
}