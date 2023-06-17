import CategoryLink from '@/components/User/CategoryLink'
import SubCategoryLink from '@/components/User/SubCategoryLink'
import { useGetSubCategoryQuery } from '@/services/userApiSlice'
import { useRouter } from 'next/router'
import React from 'react'
import {motion} from "framer-motion"
const SubCategory = () => {
    const catId = useRouter().query.catId
    const {data, isLoading} = useGetSubCategoryQuery(catId)
    return (
      <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{duration:0.5}} className="m-5 flex justify-center items-center flex-col">
          <h1 className="text-3xl p-5">Subcategories</h1>
          <div className="flex justify-center items-center  flex-wrap gap-8 p-8">
            {
              isLoading ? <p>Loading</p> : 
              data?.data?.map((e,i )=>{
                  return <SubCategoryLink key={i} data={e}/>
              })
            }
          </div>
        </motion.div>
    )
}

export default SubCategory