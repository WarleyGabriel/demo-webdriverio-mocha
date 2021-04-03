describe('Mock requests example.', () => {
    it('Should display the right Bitcoin price.', () => {
        const mock = browser.mock(
            'https://cdn.mercadobitcoin.com.br/api/tickers?' + '**',
            {
                method: 'get',
            },
        );

        mock.respond(
            {
                ticker: [
                    {
                        high: '339400.00000000',
                        low: '335000.00000000',
                        vol: '67.34972333',
                        last: '338107.00000000',
                        buy: '338107.00001000',
                        sell: '338499.98441000',
                        open: '338072.73850000',
                        date: 1617461639,
                        pair: 'BRLBTC',
                    },
                ],
            },
            { statusCode: 200 },
        );

        browser.url('https://www.mercadobitcoin.com.br/');

        const bitcoinPriceElement = $(
            '//div[@data-ticker="btc"]//p[text()="Bitcoin"]/following-sibling::p',
        );

        expect(bitcoinPriceElement).toHaveText('R$ 338.107');
    });
});
