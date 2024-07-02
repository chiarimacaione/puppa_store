
import ProductCard from '@/components/ProductCard'
import { getSearchedProducts } from '@/lib/actions/actions'

const SearchPage = async ({ params }: { params: { query: string } }) => {
    const searchedProducts = await getSearchedProducts(params.query)

    const decodedQuery = decodeURIComponent(params.query)

    return (
        <div className='px-10 py-5'>
            <p className='text-heading3-bold my-10'>Resultados de la Búsqueda para '{decodedQuery}'</p>
            {!searchedProducts  && (
                <p className='text-body my-5'>No se encontraron resultados.</p>
            )}
            <div className='flex flex-wrap justify-between gap-16'>
                {searchedProducts?.map((product: ProductType) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export const dynamic = "force-dynamic";

export default SearchPage
