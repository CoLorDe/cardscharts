const cardsData = [
      {
      name: "Line Charts",
      textfront: "Very simple type of chart, may be too simple for day traders. Often used in presentations and reports. Commonly used also to draw trend lines to anticipate potential price inflections.",
      textback: "Composed of a single line, that connects the closing prices at each time intervals.",
      bgcolor: 234567,
      },
      {
      name: "Candlestick Charts",
      textfront: "This chart utilizes the opening, closing, high and low price data. Candlestick charts give a lot of information, and it's the most common type of chart used by day traders. This large amount of information is sometimes perceived as too 'noisy'.",
      textback: "The candlestick is composed of 3 parts, the body, the upper tail and the lower tail. The body goes from the opening to the closing price. The upper and lower tails are thin lines that extend from the highest to the lowest prices reached. A green candle indicates a higher closing price than the opening one, a red one indicates a lower one.",
      bgcolor: 543267,
      },
      {
      name: "Bar Charts",
      textfront: "Also known as Open-High-Low-Close (OLHC), many traders find OHLC charts easier to follow than candlestick ones. The absence of color filters out information that is perceived as emotion from some traders.",
      textback: "The bars in an OLHC chart are composed of 3 parts, a vertical line, that extends from the lowest to the highest prices, and 2 horizontal lines, indicating the opening price (on the left) and the closing price (on the right) for each time interval.",
      bgcolor: 324567,
      },
      {
      name: "Point and Figures Charts",
      textfront: "Originally developed as a price recording system, it has become a charting method. This charting method focuses only on significant price moves, filtering out the 'noise'.",
      textback: "This type of chart is discretized, and consists of Xs and Os to represent price changes. X columns represent rising prices, and O columns represent falling prices. The substantial different of Point and Figure charts is that the time is not used on linear basis, instead, depending on the method, a new column is started everytime the price reaches certain levels.",
      bgcolor: 444466,
      },
      {
      name: "Other types of charts",
      textfront: "There are other types of charts used, but the majority of them has little differences compared to the aforementioned ones and give no extra information to traders.",
      textback: "Volume type charts are missing from these cards.",
      bgcolor: 222222,
      }
  ]


export default cardsData;
