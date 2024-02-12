// @ts-check
const { test, expect } = require("@playwright/test");

import config from "../framework/config/config";

test.describe("Login", () => {
  test("Succesfull login", async ({ page }) => {
    const context = await page.context();
    await page.goto(`${config.baseUrl}/login`);
    await page.fill("input#Email", config.defemail);
    await page.fill("input#Password", config.testpass);
    await page.click('input[value="Log in"]');
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
    await context.close();
  });

  test("unsuccesfull login", async ({ page }) => {
    const context = await page.context();
    await page.goto(`${config.baseUrl}/login`);
    await page.fill("input#Email", config.email);
    await page.fill("input#Password", config.testpass);
    await page.click('input[value="Log in"]');
    await expect(page.locator("div[class='validation-summary-errors'] span")).toBeVisible();
    await context.close();
  });
});

test.describe("Categories", () => {
    test("Categories are succesfully displayed", async ({ page }) => {
      const context = await page.context();
      await page.goto(config.baseUrl);
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(1) > a')).toBeVisible();
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(2) > a')).toBeVisible();
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(3) > a')).toBeVisible();
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(4) > a')).toBeVisible();
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(5) > a')).toBeVisible();
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(6) > a')).toBeVisible();
      await expect(page.locator('html > body > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > ul > li:nth-of-type(7) > a')).toBeVisible();
      await context.close();
    });
  
    test("Books category is exist", async ({ page }) => {
      const context = await page.context();
      await page.goto(config.baseUrl);
      await page.click('a[href="/books"]');
      await expect(page.url()).toBe(`${config.baseUrl}/books`);
      await expect(page.locator("strong[class='current-item']")).toBeVisible();
      await context.close();
    });
  });

  test.describe("Wishlist", () => {  
    test("Wishlist is empty", async ({ page }) => {
      const context = await page.context();
      await page.goto(config.baseUrl);
      await page.click('a[href="/wishlist"]');
      await expect(page.url()).toBe(`${config.baseUrl}/wishlist`);
      await expect(page.locator('text=The wishlist is empty!')).toBeVisible()
      await context.close();
    });
  });