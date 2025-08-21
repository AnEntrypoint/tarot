import re
from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Listen for console events and print them
    page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))

    try:
        # 1. Navigate to the application
        page.goto("http://localhost:8000")

        # 2. Select a spread
        three_card_spread = page.locator("#spread-three-card")
        expect(three_card_spread).to_be_visible()
        three_card_spread.click()

        # 3. Start the reading
        start_button = page.get_by_role("button", name="Begin Reading")
        expect(start_button).to_be_visible()
        start_button.click()

        # 4. Choose draw mode
        draw_mode_button = page.get_by_role("button", name="Draw Cards")
        expect(draw_mode_button).to_be_visible()
        draw_mode_button.click()

        # 5. Draw three cards
        deck = page.locator("#deckContainer .deck-card")
        expect(deck).to_be_visible()
        deck.click()
        page.wait_for_timeout(1000)
        deck.click()
        page.wait_for_timeout(1000)
        deck.click()

        # 6. Wait for analysis to appear
        analysis_panel = page.locator("#analysisPanel")
        expect(analysis_panel).to_be_visible(timeout=15000)

        # 7. Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")

        print("Verification script completed successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
