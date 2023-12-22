import { expect, test } from "@playwright/test";

test("no response @mock-ex44", async ({ page }) => {
  const expectedContent = "Error loading comments. Please contact administrator";

  const apiPath = "**/api/comments?article_id=1";

  await page.route(apiPath, async (route) => {
    await route.abort();
  });

  await page.goto("/article.html?id=1");

  // Content container
  const observedContent = page.locator("#containerComments");

  await expect(observedContent).toHaveText(expectedContent);
});
