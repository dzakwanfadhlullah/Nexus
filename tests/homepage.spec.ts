import { expect, test } from "@playwright/test";

test("homepage shows positioning and primary routes", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Temukan arah yang tepat/i })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Lihat Showcase/i }).first()).toBeVisible();
  await expect(page.getByText("Website Launch").first()).toBeVisible();
});

test("mobile navigation opens", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: /Buka menu/i }).click();
  await expect(page.getByRole("navigation", { name: /Navigasi mobile/i })).toBeVisible();
});
