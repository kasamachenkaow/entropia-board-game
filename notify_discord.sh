#!/bin/bash

WEBHOOK_URL=$DISCORD_WEBHOOK_URL
DEPLOY_STATUS=$1
BUILD_URL=$2
COMMIT_MESSAGE=$3

if [ "$DEPLOY_STATUS" == "success" ]; then
  COLOR=3066993
  STATUS="Successful"
else
  COLOR=15158332
  STATUS="Failed"
fi

PAYLOAD=$(cat <<EOF
{
  "username": "Deploy Bot",
  "embeds": [{
    "title": "Deployment $STATUS",
    "color": $COLOR,
    "fields": [
      {
        "name": "Status",
        "value": "$STATUS",
        "inline": true
      },
      {
        "name": "Build URL",
        "value": "$BUILD_URL",
        "inline": true
      },
      {
        "name": "Main URL",
        "value": "https://colowar-board-game.pages.dev",
        "inline": true
      },
      {
        "name": "Commit Message",
        "value": "$COMMIT_MESSAGE",
        "inline": false
      }
    ]
  }]
}
EOF
)

curl -H "Content-Type: application/json" -d "$PAYLOAD" $WEBHOOK_URL
