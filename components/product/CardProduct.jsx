import Image from 'next/image'
import Link from 'next/link'
import Text from '../base/Text'
import { useState, useEffect } from 'react';
import axios from 'axios'

const baseURL = "https://secondhand-be-api.herokuapp.com/api/v1/products";
export default function CardProduct() {
  const [products, setProducts] = useState([])
useEffect(() => {
  const getProducts = async () => {
    const { data: res } = await axios.get(baseURL);
    setProducts(res);
  };
  getProducts();
}, []);
  return (
    <Link href={`/product/1`} passHref>
      <div className="cursor-pointer rounded border px-2 py-4 shadow-sm">
        <div className="relative mb-2 h-24 w-full">
          <Image
            src="/sample_product.png"
            alt="name"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority={true}
          />
        </div>

        <div className="mb-1">
          <Text>Jam Tangan Casio</Text>
        </div>

        <div className="mb-2 text-neutral-03">
          <Text type="body/10">Aksesoris</Text>
        </div>
        <Text>Rp 250.000</Text>
      </div>
    </Link>
  )
}
