'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react';

const ShopInfo = () => {
    const params= useParams();
    const {id}= params;
    const {data}=useQuery({
        queryKey:['shopInfo',id],
        queryFn:async()=>{
         const res = await axios(`/api/Shop/shopInfo?shop_id=${id}`)
         console.log('shopProduct',res.data)
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default ShopInfo;