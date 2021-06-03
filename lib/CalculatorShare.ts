class CalculatorShare{

    num_share: number;
    buy_price: number;
    buy_com_percent: number;
    customer_amount: number;

    constructor(amount: number)
    {
        this.num_share= 0;
        this.buy_price= 0;
        this.buy_com_percent= 0;
        this.customer_amount=amount;

    }

    Calculate_share(temp_num_share,temp_buy_price,temp_buy_com_percent)
    {
        //-->setting the values
        this.num_share= temp_num_share;
        this.buy_price= temp_buy_price;
        this.buy_com_percent= temp_buy_com_percent;



    }

}