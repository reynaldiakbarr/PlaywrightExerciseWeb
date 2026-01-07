import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('E-Commerce Complexity Suite', () => {
  
  test('User should be able to register during the checkout process', async ({ page }) => {
    const checkout = new CheckoutPage(page);
    const timestamp = Date.now();

    // 1. Navigate to Site
    await page.goto('https://automationexercise.com');
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 2. Add Product and Go to Cart
    await checkout.addFirstProductToCart();
    await expect(page).toHaveURL(/view_cart/);

    // 3. Click Checkout and choose to Register
    await checkout.startCheckoutProcess();

    // 4. Fill Registration (The "Complexity" part)
    await page.locator('[data-qa="signup-name"]').fill('QA Candidate');
    await page.locator('[data-qa="signup-email"]').fill(`testuser${timestamp}@example.com`);
    await page.locator('[data-qa="signup-button"]').click();

    // Fill Account Details
    await page.locator('#id_gender1').check();
    await page.locator('[data-qa="password"]').fill('Password123!');
    await page.locator('[data-qa="first_name"]').fill('John');
    await page.locator('[data-qa="last_name"]').fill('Doe');
    await page.locator('[data-qa="address"]').fill('123 QA Street');
    await page.locator('[data-qa="country"]').selectOption('United States');
    await page.locator('[data-qa="state"]').fill('California');
    await page.locator('[data-qa="city"]').fill('Los Angeles');
    await page.locator('[data-qa="zipcode"]').fill('90001');
    await page.locator('[data-qa="mobile_number"]').fill('1234567890');
    await page.locator('[data-qa="create-account"]').click();

    // 5. Verify Account Created and Return to Cart
    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
    
    // 6. Final Checkout Verification
    await page.getByRole('link', { name: 'Cart' }).click();
    await page.getByText('Proceed To Checkout').click();

    // Verify user is now on the Address Details page (Final Step)
    await expect(page.locator('#address_delivery')).toBeVisible();
    console.log('Test Passed: User successfully registered during checkout flow.');
  });
});