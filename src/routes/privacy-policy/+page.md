---
layout: LegalPage
title: Website privacy policy
description: How this website handles request data and browser preferences.
updatedAt: 2026-10-23
---

<script>
  import { legalConfig } from '$lib/legalConfig';
</script>

## 1. Scope

This policy covers the OpenMapX website at [openmapx.org](https://openmapx.org).
The application at openmapx.com has a separate [privacy policy](https://openmapx.com/privacy)
covering accounts, saved places, location use, and data providers. Other OpenMapX
instances are operated independently and have their own privacy notices.

Following a link to GitHub, the documentation, the map application, or another
website takes you to a separate service. Its operator and privacy policy apply
there.

## 2. Controller and contact

The controller responsible for this website is:

{legalConfig.name}\
{legalConfig.street}\
{legalConfig.postalCode} {legalConfig.city}, {legalConfig.country}\
Email: <a href="mailto:{legalConfig.privacyEmail}">{legalConfig.privacyEmail}</a>

We are not required to designate a data protection officer for this website.
Send data-protection questions or requests to the address above.

## 3. Request data and hosting

This is a static website. Serving it involves processing your IP address and
request details, such as the time, requested URL, referrer when supplied, and
browser user-agent. Request logs help operate the site and investigate errors
or abuse. The legal basis is Art. 6(1)(f) GDPR: our legitimate interest in
providing and securing the website.

We delete request logs after {legalConfig.logRetentionDays} days.

{#if legalConfig.hostingProvider}
The hosting provider is {legalConfig.hostingProvider}.
{#if legalConfig.hostingLocations}The hosting locations are {legalConfig.hostingLocations}.{/if}
The provider processes request data to host and serve the website.
A data-processing agreement is in place where required.
{/if}

## 4. Browser storage and assets

The site uses local storage for functional preferences, including your light or
dark theme choice. You can remove these preferences by clearing this site's
browser data. This website does not offer user accounts or store the places
you save in the OpenMapX application.

Fonts, scripts, and images are served with the site. We do not load third-party
analytics or advertising scripts, set analytics or advertising cookies, or
build advertising profiles from visits to this website.

## 5. Your rights

Under the GDPR, you may have rights to access, correct, erase, restrict, or
receive a portable copy of your personal data, and to object to processing
based on legitimate interests. These rights apply subject to the conditions
in the GDPR. You also have the right to complain to a data-protection
supervisory authority.

Contact <a href="mailto:{legalConfig.privacyEmail}">{legalConfig.privacyEmail}</a>
to make a request about this website. For data held by an OpenMapX application
instance, contact that instance's operator using its privacy notice.

## 6. Security and changes

We use technical and organizational measures to protect the website and request
data. No internet service can guarantee complete security.

When this policy changes, we update the date shown above.
