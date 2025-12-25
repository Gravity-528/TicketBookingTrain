export type CouponAction={
   coupon:CouponProp,
   status:Boolean
}

export type CouponProp={
    couponId:string,
    couponName:string,
    discount: number,
    type:string,
    expire_by: string,
    min_fare:number
}