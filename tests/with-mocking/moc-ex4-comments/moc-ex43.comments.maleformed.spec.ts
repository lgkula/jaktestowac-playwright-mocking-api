import { expect, test } from "@playwright/test";

test("malformed response @mock-ex43", async ({ page }) => {
  const expectedContent = "";

  const apiPath = "**/api/comments?article_id=1";

  await page.route(apiPath, async (route) => {
    const response = await route.fetch();
    const json = "";
    await route.fulfill({ response, json });
  });

  await page.goto("/article.html?id=1");
  // await page.waitForTimeout(1_000)
  // Content container
  const observedContent = page.locator("#containerComments");
  await expect(observedContent).not.toBeVisible
});
