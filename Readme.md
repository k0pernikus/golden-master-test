# Golden Master Test with Nock example

## About

Code example for my hhjs talk about generating Golden Master Test with the help of nock.

The example uses the [json-placeholder-api](https://jsonplaceholder.typicode.com/), it fetches each post and creates a csv file containing the id and tile. The example is a bit contrived and simplistic to focus on the golden master test setup.

# Requirements

- node8
- yarn

# Getting started

    yarn install && yarn tsc

# Entrypoint

    yarn task --help

and follow the description.

## Running as a golden master test case

    yarn goldenMasterTest

# Csv file

You will find the csv file at:

    ./out/data.csv
