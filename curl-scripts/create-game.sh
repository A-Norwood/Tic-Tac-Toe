
curl "https://tic-tac-toe-wdi-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${TOKEN}" \

echo
