curl "https://tic-tac-toe-wdi-production.herokuapp.com/games" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'"
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
      }
  }'

  echo
