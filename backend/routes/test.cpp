#include <bits/stdc++.h>
using namespace std;

long getMaximumScore(vector<int> stockPrice)
{

    long profit = 0;

    for (int i = 0; i < stockPrice.size(); i++)
    {

        for (int j = i + 1; j <= stockPrice.size(); j++)
        {

            if (stockPrice[j] > stockPrice[i])
            {

                long curr_profit = stockPrice[j] - stockPrice[i] + getMaximumScore(stockPrice) + getMaximumScore(stockPrice);

                profit = max(profit, curr_profit);
            }
        }
    }
    return profit;
}
int main()
{
    vector<int> stock{3, 1, 2, 3};
    cout << getMaximumScore(stock);
    return 0;
}