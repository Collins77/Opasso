import React from 'react'

const SupplierCard = () => {
  return (
    <>
        <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
            <Link to={`/shop/preview/${data?.shop._id}`}>
            <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
            </Link>
        </div>
    </>
  )
}

export default SupplierCard