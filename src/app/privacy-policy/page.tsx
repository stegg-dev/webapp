import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'December 30, 2023';

  return (
    <div className="min-h-screen py-10">
      <Head>
        <title>Privacy Policy - Stegg</title>
        <meta name="description" content="Privacy Policy for Stegg app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <section className="mb-12 text-center bg-white rounded-lg px-8 py-6 mb-8 w-auto">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600">Last updated: {lastUpdated}</p>
        </section>

        <section className="bg-white shadow-md rounded-lg px-8 py-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Information</h2>
          <p className="mb-4">
            At Stegg, we respect your privacy and are committed to protecting it.
            Our app does not collect, use, store, or share any personal data.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg px-8 py-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Future Updates</h2>
          <p className="mb-4">
            This privacy policy will inform users of our policies regarding any future collection,
            use, and disclosure of personal data when anyone uses our Service and the choices
            associated with that data.
          </p>
          <p>
            Should we decide to collect data in the future, this privacy policy will be updated accordingly.
            We advise our users to review this page periodically for any changes. Changes to this privacy policy
            are effective when they are posted on this page.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about Stegg or this privacy policy, please contact us at johnaquino@outlook.com.
          </p>
        </section>

        <div className="text-center mt-8">
          <Link href="/">
            <span className="text-white bg-gray-500 hover:bg-gray-700 font-semibold py-2 px-4 rounded">
              Home
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
