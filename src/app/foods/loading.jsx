import FoodCardSkeleton from '@/components/skeletons/FoodCardSkeletons';
import React from 'react';

const loading = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className='grid my-5 grid-cols-4 gap-5'>
                {
                    [...Array(12)].map((_ , index)=><FoodCardSkeleton key={index}></FoodCardSkeleton>)
                }
            
            </div>
            
        </div>
    );
};

export default loading;