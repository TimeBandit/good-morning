// https://khalilstemmler.com/blogs/typescript/node-starter-project/
// https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html
// .

// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
import { LogLevel, WebClient } from "@slack/web-api";
import emojis from "./emojis";
import quotes, { Quote } from "./quotes";
import salutations from "./salutations";
require("dotenv").config();

if (process.env.NODE_ENV !== "production") {
  console.info("Starting in local mode...");
}

const TOKEN = process.env.USER_TOKEN;

if (!process.env.CHANNEL_ID) {
  console.error("Channel id missing");
  process.exit();
}

const CHANNEL = process.env.CHANNEL_ID;

// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient(TOKEN, {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG,
});
// Post a message to a channel your app is in using ID and message text
async function publishMessage(id: string, text: string) {
  try {
    // Call the chat.postMessage method using the built-in WebClient
    const result = await client.chat.postMessage({
      // The token you used to initialize your app
      token: TOKEN,
      channel: id,
      text: text,
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const pick = <T>(selection: T[]): T => {
  const index = Math.floor(Math.random() * selection.length);
  return selection[index];
};

const quote = pick<Quote>(quotes);
const emoji = pick<string>(emojis);
const salutation = pick<string>(salutations);

publishMessage(
  CHANNEL,
  `${salutation} \n> ${quote.text} ${quote.author || "Anon"} ${emoji}`
);
