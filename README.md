# Polar Digital Code Test

Thank you for taking the time to complete our coding test. This test will be an important part of establishing our working relationship going forward. There are two tasks for you to complete: one using an ORM system called TypeORM and another using a scraping tool called Puppeteer. You should utilise TypeORM and Puppeteer's documentation in order to complete the tasks.

Please fork this repo and submit a pull request with the completed tasks. If you have any questions about the tasks please don't hesitate to contact me at [ollie@polar.digital](mailto:ollie@polar.digital).

## Task 1: TypeORM Entity Setup

Your task is to implement three entities using [TypeORM](https://typeorm.io/#/). There will be no script to run at the end of this task to verify the code; this is simply a test of code structuring and how well you can implement code according to specification.

1. `cd typeorm-test && npm install`
2. Open the following image as a reference for this task: [Entity Relationship Diagram](https://i.imgur.com/QKa2GGa.png)
3. Use the scaffolding classes in `typeorm-test/entities` to implement the three entities as outlined in the ERD from the image above. Pay close attention to the data types from the ERD.

## Task 2: Puppeteer Redirect Scraper

Your task is to create a basic Puppeteer scraper that can follow a link that has any amount of redirects. The path of the redirects should be tracked and displayed.

Example input:
```
https://affiliatewebsite.com/a-great-deal
```

Example output:
```
https://affiliatewebsite.com/a-great-deal
-> https://some-redirect.com
-> https://some-other-redirect.com
-> https://final-site.com
```

1. `cd puppeteer-test && npm install`
2. Use `puppeteer-test/scraper.ts` to implement the scraper
