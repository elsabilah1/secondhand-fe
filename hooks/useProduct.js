import useSWR from 'swr'
import { _axios } from '../utils/Api'

const fetcher = (url) => _axios.get(url).then((res) => res.data)

const useProduct = (category, keyword) => {
  let endpoint = '/products'
  if (category) endpoint = endpoint + '/filter?category=' + category
  if (keyword) endpoint = endpoint + '/search?keyword=' + keyword

  const { data, error } = useSWR(endpoint, fetcher)
  let filteredProducts

  if (data) {
    const products = data?.Product ? data?.Product : data
    filteredProducts = products.filter((item) => item.status === true)
  }

  return {
    products: filteredProducts,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useDashboardProducts = (sortBy) => {
  const { data, error } = useSWR(`/user/products?sortBy=${sortBy}`, fetcher)

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useProduct
