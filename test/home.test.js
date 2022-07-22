import '@testing-library/jest-dom'
import { getPage } from 'next-page-tester'

describe('home page', () => {
  it('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    })

    render()
    // expect(screen.getByTestId('carousel-home')).toBeInTheDocument()
  })
})

// describe('GET /products', () => {
//   test('200 OK', async () => {
//     const res = await Get('/products')
//     expect(res.statusCode).toBe(200)
//     expect(res.body.message).toEqual('Produk ditemukan')
//   })
// })

// import '@testing-library/jest-dom';
// import { Get } from '../../utils/Api';
// import Home from '../pages/index';

// test("username input should be rendered", () => {
//   render(<Home />);
//   const product = await Get ('/product')
//   const carouselHome = screen.getByTestId('carousel-home');
//   expect(carouselHome).toBeInTheDocument();
// });
