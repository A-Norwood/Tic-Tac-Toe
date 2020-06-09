
curl "https://tic-tac-toe-wdi-production.herokuapp.com/create-game" \
  --include \
  --request POST \
  --header 'Content-Type: application/json' \
  --header "authorization: Token token=${TOKEN}"

echo
