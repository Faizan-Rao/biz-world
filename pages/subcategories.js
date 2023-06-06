import CategoryLink from '@/components/User/CategoryLink'
import SubCategoryLink from '@/components/User/SubCategoryLink'
import { useGetSubCategoryQuery } from '@/services/userApiSlice'
import { useRouter } from 'next/router'
import React from 'react'

const SubCategory = () => {
    const catId = useRouter().query.catId
    const {data, isLoading} = useGetSubCategoryQuery(catId)
    return (
      <div className="m-5 ">
          <h1 className="text-3xl p-5">All SubCategories</h1>
          <div className="flex  items-center  flex-wrap gap-8 p-8">
            {
              isLoading ? <p>Loading</p> : 
              data?.data?.map((e,i )=>{
                  return <SubCategoryLink key={i} data={e}/>
              })
            }
          </div>
        </div>
    )
}

export default SubCategory