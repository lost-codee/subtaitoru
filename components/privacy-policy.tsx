"use client";

import React from "react";

export function PrivacyPolicyComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600">
              Subtaitoru
            </h1>
            <div className="space-x-6 text-sm sm:text-base">
              <a
                href="/#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Features
              </a>
              <a
                href="/#demo"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Demo
              </a>
              <a
                href="/#contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </a>

              <a
                href="/privacy-policy"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600">
              At Subtaitoru , we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you use our Chrome extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Subtitle files you upload to the extension</li>
              <li>
                Your extension settings (font size, color preferences, etc.)
              </li>
              <li>Words you click on for translation (temporarily stored)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the collected information solely to provide and improve our
              subtitle translation service. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
              <li>Displaying subtitles on your viewed content</li>
              <li>Providing word translations and explanations</li>
              <li>Customizing the extension based on your settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-600">
              All data is stored locally on your device using Chrome's storage
              API. We do not transmit or store your personal data on our
              servers. Word translations are fetched from a third-party API, but
              individual words are not stored after the translation is provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600">
              We use a third-party API for word translations. When you click on
              a word for translation, that word is sent to our API provider.
              Please note that this provider may have its own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, modify, or delete any data stored by
              the extension on your device. This can be done through the
              extension's settings or by uninstalling the extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <a
              href="mailto:privacy@subtitlemaster.com"
              className="text-blue-600 hover:underline"
            >
              lost-code@hello.dev
            </a>
          </section>
        </div>
      </main>

      <footer className="bg-gray-100 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Subtaitoru. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a
              href="/privacy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
