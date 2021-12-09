# Cucumber & Typescript Example

![cucumber tests](https://github.com/anonymax25/cucumber-typescript-addition-example/actions/workflows/test_cucumber.yml/badge.svg) 

![unit tests](https://github.com/anonymax25/cucumber-typescript-addition-example/actions/workflows/test_unit.yml/badge.svg)


## By [Maxime d'Harboullé](https://github.com/anonymax25)

## Goal
 
The goal of this example is to write and test code in typescript. We will run mocha and cucumber/gherkin unit tests on this code.
  
Choosen language: <img src="https://slackmojis.com/emojis/1383-typescript/download" align="center" alt="typescript" title="image Title" height="26"/>  
Written and tested on nodejs: v12.22.6 aka. lts/erbium

## Steps
### 1 - Install dependencies
```npm install```

### 2 - Scripts
```npm run build``` builds the ts into js to ./build

```npm run test:unit``` launches unit tests

```npm run test:cucumber``` launches cucumber tests on the features in ```./features/...```

Check-out our unit test: ```./test/test.js```, for an  example of how to call the function or run it by using ```npm run test:unit```

