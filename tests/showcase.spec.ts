import { expect, test } from "@playwright/test";

test("showcase search filters cards", async ({ page }) => {
  await page.goto("/showcase");
  const search = page.getByPlaceholder(/Cari travel/i);
  await search.fill("florist");
  await expect(page.getByText("Soft Florist Catalog")).toBeVisible();
  await expect(page.getByText("Bleum Florist Catalog")).toBeVisible();
  await expect(page.getByText(/2 arah ditemukan/i)).toBeVisible();
});

test("showcase detail leads to brief with reference", async ({ page }) => {
  await page.goto("/showcase/modern-travel-website");
  await expect(page.getByRole("heading", { name: "Modern Travel Website" })).toBeVisible();
  await page.getByRole("link", { name: /Buat seperti ini/i }).first().click();
  await expect(page).toHaveURL(/reference=modern-travel-website/);
});

test("BarberLabs case study is searchable and keeps its brief context", async ({ page }) => {
  await page.goto("/showcase");
  await page.getByPlaceholder(/Cari travel/i).fill("BarberLabs");
  await expect(
    page.getByRole("heading", { name: "BarberLabs Booking & Operations" })
  ).toBeVisible();
  await expect(page.getByText("Case Study")).toBeVisible();

  await page
    .getByRole("link", { name: "BarberLabs Booking & Operations", exact: true })
    .click();
  await expect(page).toHaveURL(/showcase\/barberlabs-booking-operations/);
  await page.getByRole("link", { name: /Buat seperti ini/i }).first().click();
  await expect(page).toHaveURL(/reference=barberlabs-booking-operations/);
});

test("five local case studies have detail pages and brief links", async ({ page }) => {
  test.setTimeout(60_000);

  const caseStudies = [
    ["jogja-rental-lead-platform", "JogjaRental Lead & Fleet Platform"],
    ["kedai-tansu-ordering-experience", "Kedai Tansu Ordering Experience"],
    ["crayon-daycare-trust-website", "Crayon Daycare Trust Website"],
    ["agro-buah-b2b-supplier", "Agro Buah B2B Supplier"],
    ["bleum-florist-catalog", "Bleum Florist Catalog"],
  ] as const;

  for (const [slug, title] of caseStudies) {
    await page.goto(`/showcase/${slug}`);
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
    await expect(page.getByText("Case Study").first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Buat seperti ini/i }).first()).toHaveAttribute(
      "href",
      new RegExp(`reference=${slug}`)
    );
  }
});
