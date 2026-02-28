import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ProductCard } from '@/components/appComponents/ProductCard'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import type { RootState } from '@/store'
import { decrementProductQty, incrementProductQty, removeProduct } from './cartSlice'
import toast from 'react-hot-toast'

const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cartState);

    const totalMRP = cart.items.reduce((acc, item) =>
        acc + (item.product.price * item.quantity), 0
    );

    const totalDiscountSavings = cart.items.reduce((acc, item) => {
        const unitDiscount = (item.product.price * (item.product.discountPercentage || 0)) / 100;
        return acc + (unitDiscount * item.quantity);
    }, 0);

    const totalPayable = totalMRP - totalDiscountSavings;

    const formatRaw = (num: number) => num.toFixed(2);

    const handleIncrement = (id: number) => {
        dispatch(incrementProductQty(id))
    }
    const handleDecrement = (id: number) => {
        dispatch(decrementProductQty(id))
    }
    const handleRemove = (id: number) => {
        dispatch(removeProduct(id))
        toast.success('product removed')
    }

    return (
        <div className='container mx-auto mt-8 px-4'>
            <h2 className="mb-6 text-2xl font-bold">Your Cart ({cart.totalQuantity})</h2>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <ScrollArea className=" w-full lg:w-8/12 rounded-md border bg-card shadow-sm">
                    <div className="p-4">
                        {cart.items.map((item) => (
                            <React.Fragment key={item.product.id}>
                                <ProductCard product={item.product} isCart={true} quantity={item.quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} onRemove={handleRemove} />
                                <Separator className="my-2" />
                            </React.Fragment>
                        ))}
                    </div>
                </ScrollArea>

                <div className="w-full lg:w-4/12 p-6 border rounded-md bg-muted/10 sticky top-8">
                    <h3 className="text-lg font-semibold mb-4 border-b pb-2">Price Details</h3>
                    <div className="space-y-3 ">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Total MRP</span>
                            <span>{formatRaw(totalMRP)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                            <span>Discount Savings</span>
                            <span>-{formatRaw(totalDiscountSavings)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span className="text-green-600">FREE</span>
                        </div>
                        <Separator className="my-2 border-dashed" />
                        <div className="flex justify-between text-xl font-bold pt-2">
                            <span>Total Payable</span>
                            <span>{formatRaw(totalPayable)}</span>
                        </div>
                    </div>

                    <Button className="w-full mt-6" size="lg">Proceed to Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CartPage) 