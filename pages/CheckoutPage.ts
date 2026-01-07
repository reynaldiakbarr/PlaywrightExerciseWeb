import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly productItem: Locator;
  readonly addToCartBtn: Locator;
  readonly viewCartLink: Locator;
  readonly proceedToCheckoutBtn: Locator;
  readonly registerLoginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productItem = page.locator('.single-products').first();
    this.addToCartBtn = page.locator('.add-to-cart').first();
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
    this.registerLoginLink = page.getByRole('link', { name: 'Register / Login' });
  }

  async addFirstProductToCart() {
    await this.productItem.hover();
    await this.addToCartBtn.click();
    await this.viewCartLink.click();
  }

  async startCheckoutProcess() {
    await this.proceedToCheckoutBtn.click();
    await this.registerLoginLink.click();
  }
}