
# Stock Recommendation Website

Utilized React.js, Django, Jupyter Notebook, and PostgreSQL to develop an application that uses historical market data (in this case all stocks traded by Nasdaq) that suggests stocks based on the user’s preferences or choices.
## Features

- Account creation using Google login.
- Can recommend stocks for short/long term traders.
- Profiles recommended stocks (e.g. shows logo, and basic information for the company).
- Saves recommended stocks


## Usage/Examples

- Create an account using Google login
- After creation, go to "Menu" -> "Run Quiz" and go through the questionnarie (It can be ended after 5 questions answered).
- Based on your answers you will receive stock recommendations for short-term or long-term traders. 
- You can preview past recommendations on "Menu" -> "Past Recommendations".
## Tech Stack

**Front End**: React.js

**Back End**: Django/PostgreSQL





## FAQ

#### Should I use this application as financial advice?

No. I am not a financial expert/advisor.

#### How are stocks recommendations for short-term traders determined?

The way that those stocks are selected is with a combination of the highest standard deviation (percent and flat) and using polynomial equations to determine the trend in the time series. 

#### How are stocks recommendations for long-term traders determined?

The stocks that have performed the best (meaning, the ones that have generated the highest profit by difference over time) over a 5+ year period are the ones selected.


## Author

- Jorge Caridad

