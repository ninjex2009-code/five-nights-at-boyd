#!/bin/bash
# Double-click to play, and to let anyone on the same wi-fi play too.
# Close this Terminal window to stop the server.
cd "$(dirname "$0")"
PORT=8123
while lsof -i :$PORT >/dev/null 2>&1; do PORT=$((PORT+1)); done
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)
echo "Five Nights at Boyd"
echo "  on this Mac:      http://localhost:$PORT"
[ -n "$IP" ] && echo "  same wi-fi:       http://$IP:$PORT   <- send people this one"
echo ""
echo "Leave this window open while anyone is playing."
( sleep 1 && open "http://localhost:$PORT" ) &
python3 -m http.server $PORT --bind 0.0.0.0
