# StockXchange
A React app, in which you can trade shares, CRUDL them and get information about the current share value, the traders and more!

First, a few important points to note about my code:
1. I choose to use React for development, the backend developed with Python.
2. To activate frontend: install the libraries by "npm i" and run "npm start".
3. To activate backend: install the libraries (Uvicorn, fastapi, pandas, pickle), and run "Uvicorn main:app".
4. It's not possible to purchase shares from a certain company if I already have an open order (only after the order is confirmed).
5. The sell logic doesnt work too well (on server side).
6. I assume that I get valid trader_ids and share_ids. Plus, not negative amounts and price_per_share.

# Login page:
In order to use the app you must login with a trader ID.

# Stock exchange - homepage:
This page display all the share details (including information on open orders and last transactions) and an option to buy shares, sell shares and cancel trade requests (As long as it hasn't been approved yet)

# Traders page:
This page display all the trader names on the app.

# My account page:
On this page the user can check his gain or loss (money and holdings) and his last eight transactions.


