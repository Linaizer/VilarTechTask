import { useQuery } from "@tanstack/react-query";

export const useChart = (coinId) => {
    return useQuery({
        queryKey: ['coins', coinId],
        refetchInterval:30000,
        queryFn: () =>
            fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`)
                .then(response => response.json())
    })
}