import { expect, test } from "@playwright/test";

test("showcase search filters cards", async ({ page }) => {
  await page.goto("/showcase");
  const search = page.getByPlaceholder(/Cari travel/i);
  await search.fill("florist");
  await expect(page.getByText("Soft Florist Catalog")).toBeVisible();
  await expect(page.getByText(/1 arah ditemukan/i)).toBeVisible();
});

test("showcase detail leads to brief with reference", async ({ page }) => {
  await page.goto("/showcase/modern-travel-website");
  await expect(page.getByRole("heading", { name: "Modern Travel Website" })).toBeVisible();
  await page.getByRole("link", { name: /Buat seperti ini/i }).first().click();
  await expect(page).toHaveURL(/reference=modern-travel-website/);
});
