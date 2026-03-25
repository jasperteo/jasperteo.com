#!/bin/bash
# Launch Edge Dev with remote debugging if not already running, then connect chrome-devtools-mcp

if ! curl -s http://127.0.0.1:9222/json/version > /dev/null 2>&1; then
  open -a "Microsoft Edge Dev" --args --inprivate --remote-debugging-port=9222
  for i in {1..10}; do
    sleep 1
    if curl -s http://127.0.0.1:9222/json/version > /dev/null 2>&1; then
      break
    fi
  done
fi

npx chrome-devtools-mcp@latest --browserUrl http://127.0.0.1:9222
