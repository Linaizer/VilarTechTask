import { useQuery } from "@tanstack/react-query";

export const useCoinsPaged = (page) => {
    return useQuery({
        queryKey: ['coins', page],
        queryFn: () =>
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=${page}`)
                .then(response => response.json())
    })
}