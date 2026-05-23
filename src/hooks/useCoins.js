import { useQuery } from "@tanstack/react-query";

export const useCoins = () => {
    return useQuery({
        queryKey: ['coins'],
        queryFn: () =>
            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1`)
                .then(response => response.json())
    })
}