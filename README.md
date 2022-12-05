<h1 align="center">
  <br>
  🌞Good Morning.
</h1>

<h4 align="center">Automatically post inspirational quotes to 
<a href="https://slack.com">Slack</a>
</h4>

<p align="center">
  <a>
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/timebandit/good-morning">
  </a>
  <a href="https://github.com/TimeBandit/good-morning/workflows/Node.js%20CI/badge.svg">
    <img src="https://github.com/TimeBandit/good-morning/workflows/Node.js%20CI/badge.svg">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<hr>
<h1 align="center">
  <img src="./src/assets/banner.png">
</h1>

## Key Features

Automates your morning greeting by posting one for you. Easily extendable.

## Installation

- Clone this repo.
- Make any changes you need to the [emojis](src/emojis.ts), [quotes](src/quotes.ts) or [salutations](src/salutations.ts) as required.

Under `settings > secrets`, define the following

- `CHANNEL_ID_DEV` : the Slack channel that a message will be posted to by the pipeline 'on' push. This can me a test channel.
- `CHANNEL_ID_PROD`: the Slack channel that your daily message will be posted to each morning.
- `USER_TOKEN`: your Slack user token.

## Usage

To modify the automatic shedule, edit [schedule.js.yml](.github/workflows/schedule.js.yml)
.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GPL v3](https://choosealicense.com/licenses/gpl-3.0)
