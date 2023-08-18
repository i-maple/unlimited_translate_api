# Unlimited Translation API 

Use the feature of Google Translate in your application without needing an expensive Google Translate API Key.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [End Points](#endpoints)
- [Limitation](#Limitation)

## Overview

This free api can be used to utilize the unlimited translation feature for free. You do not need google translate api key, hence you do not need to cover the unbearable cost of google translate api key and enjoy the similar feature for absolutely free. 

## Installation

Instructions on how to install and set up your project. Include any prerequisites, dependencies, or system requirements.

Clone the repository by adding 
```shell
https://github.com/i-maple/unlimited_translate_api.git 
```
in the command line

Then run
```shell
npm install
```

## EndPoints
```shell
- /api - Initial Route To Perform Translation Operations
```

### Query

```
- text=<text> - Provide the Text you want to translate
- from=<from> - The language of the text (Language you want to translate from)
- to=<to> - Language you want to translate to
```
Example URL is : 
```
https://<your-url.com>/api?text=<text>&from=<from>&to=<to>
```
## Limitation

If more number of request is sent from same IP, the ip gets blocked. 
You can bypass it using a proxy.