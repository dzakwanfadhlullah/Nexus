import { expect, test } from "@playwright/test";

test("brief recognizes showcase reference", async ({ page }) => {
  await page.goto("/brief?reference=modern-travel-website");
  await expect(page.getByRole("heading", { name: /Ceritakan kebutuhan project/i })).toBeVisible();
  await page.getByLabel("Landing Page").check();
  await page.getByRole("button", { name: /Lanjut/i }).click();
  await page.getByPlaceholder(/Studio Pagi/i).fill("Nexus Demo");
  await page.getByPlaceholder(/Travel, Florist/i).fill("Travel");
  await page.getByRole("button", { name: /Lanjut/i }).click();
  await expect(page.getByText("Modern Travel Website")).toBeVisible();
});
