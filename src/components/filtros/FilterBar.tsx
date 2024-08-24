import type { FilterOptions } from "@/hooks/useFilteredProducts"

type FilterBarProps = {
    toggleFilter: (filterName: keyof FilterOptions) => void,
    filters: FilterOptions
}

export const FilterBar = ({ toggleFilter, filters }: FilterBarProps) => {
    return (
        <div className="flex w-full my-5 justify-end">
            <select
                className="p-2 text-black bg-white border border-gray-300 rounded"
                onChange={(e) => toggleFilter(e.target.value as keyof typeof filters)}
            >
                <option value="sortByPriceAsc">Menor Precio</option>
                <option value="sortByPriceDesc">Mayor Precio</option>
                <option value="inStock">En Stock</option>
                <option value="iPhones">iPhones</option>
                <option value="android">Android</option>
            </select>
        </div>
    )
}
