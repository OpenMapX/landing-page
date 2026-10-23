# Landing content review

Reviewed on 23 October 2026 against OpenMapX commit
[`ef896ceae876`](https://github.com/OpenMapX/openmapx/tree/ef896ceae876959180116cf61ffcf643b88ebffe).
The landing baseline was `c987c1ce6ade`. Source evidence establishes
implementation, not deployment acceptance or universal provider coverage.

## Reference sites and writing

The opening research covered the live homepages of
[Immich](https://immich.app/), [authentik](https://goauthentik.io/),
[Nextcloud](https://nextcloud.com/), and
[Home Assistant](https://www.home-assistant.io/), including their rendered
content. The useful common patterns were a clear product category, concrete
uses before architecture, separate paths to try and install, and links to
community work and documentation. OpenMapX does not inherit those projects'
usage figures, support promises, partnerships, or maturity claims.

The copy follows the editing process in
[Humanizer](https://github.com/blader/humanizer/blob/8c307f367c91bd974002f10f2be2965d642c13df/SKILL.md):
identify empty emphasis and repetitive structures, rewrite around supported
facts, then check the draft for lost details and unsupported additions.
Technical terms such as POI, GERS, PMTiles, GOFS, and octilinear diagrams move
out of the main visitor explanations. Necessary format names remain in import
and export guidance.

The visual system is preserved. Static-output inspection also found that
`@immich/ui` 0.85 card-section registration runs only in `onMount`: all 60
cards in seven generated pages were empty before hydration. Their text now
renders directly inside the existing card wrappers with the same styling.
The static-content probe failed before that markup correction and passed after
it; this is a content-delivery fix, not a new interaction or visual system.

The header prioritizes Features, Use OpenMapX, Roadmap, and Docs so the longer
labels fit at the existing desktop breakpoint. Blog and GitHub remain in the
sidebar and footer, with GitHub also in the homepage actions. Group headings
and section links organize the existing feature cards. The homepage no longer presents a logo placeholder as
an application screenshot. Product imagery can be addressed in the later
design pass.

## Claim evidence

All product links below pin the reviewed source revision.

| Area | Public-content decision | Source evidence |
| --- | --- | --- |
| Project status | Say experimental and implemented; do not claim a stable or named public release. | [Unpublished first alpha](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/releases/0.1.0-alpha.1.md#L5). The public GitHub releases API returned an empty list during this review. |
| Accounts | Separate map/search/directions from saved lists, share management, and offline preparation. | [Saved-route authentication](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/api/src/routes/saved.ts#L30), [offline authentication](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/api/src/routes/offline-packages.ts#L114). |
| Search | Explain ranked place search, codes, nearby discovery, and prepared landmark coverage. | [Suggestion ranking](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/packages/core/src/utils/suggestionRanking.ts#L78), [landmark readiness](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/search-notable-places/index.ts#L12). |
| Recent searches | Say device-local, clearable, and optional. | [Recent-search store](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/stores/recentSearchStore.ts#L42). |
| Voice and AI | Browser speech processing may leave the device. Cloud AI consent is the default policy, not universal across instances. | [Voice input](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/components/search/VoiceSearchButton.tsx#L113), [AI authorization](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/search-nlp/index.ts#L297). |
| Place data | Describe available details and optional Overture coverage without internal identifiers. | [Place details](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/components/panels/place/PlaceOverviewTab.tsx#L480), [source combination](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/poi-search/orchestrator.ts#L218). |
| Cycling and stops | Mention cycling preferences and intermediate stops with engine qualifications. | [BRouter profiles](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/routing-brouter/provider.ts#L10), [trip schedule](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/components/panels/directions/TripScheduleCard.tsx#L91). |
| EV and costs | Use estimates; do not imply a reserved charger or known prices everywhere. Keep richer user-stop planning in the ideas section. | [Availability limits](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/packages/ev-charge-planner/src/plan.ts#L491), [price requirements and two-endpoint flow](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/routing/ev-plan.ts#L337). |
| Transit | Qualify live data by provider. Avoid describing every dynamic OTP endpoint as a journey planner. | [Provider selection](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/transit/orchestrator.ts#L510), [dynamic OTP capabilities](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/transit-dynamic-registry/index.ts#L114). |
| Transit navigation | Qualify itinerary refresh and background reminders. | [Live refresh](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/lib/navigation/useTransitLiveRefresh.ts#L14), [notification permissions](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/lib/navigation/navNotify.ts#L25). |
| Reachability | Describe estimates and optional local-MOTIS capability, not guaranteed exact coverage. | [Reachability filtering](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/lib/useExploreReachResults.ts#L50), [guide](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/administration/transit-reachability.md). |
| Shared mobility | Remove the unsupported claim of a connected TOMP live adapter. | [Registered shared-mobility runtime](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/packages/mobility-core/src/shared-mobility-runtime.ts#L139). |
| Ride services | Distinguish published quotes from commercial handoffs. Do not promise universal comparison or coordinate prefill. | [Comparison policy](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/ride-hailing/orchestrator.ts#L183), [Bolt handoff](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/ride-deeplink/providers/bolt.ts#L14). |
| Offline | Download preparation needs an account and compatible data. Navigation must start online; ending it clears the recoverable session. New routing, search, rerouting, and live data need a network. Snapshots expire after 24 hours. | [Session persistence](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/lib/navigation/useNavigationSessionPersistence.ts#L56), [snapshot schema and expiry](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/packages/core/src/navigation/offlineSession.ts#L15), [reroute suppression](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/lib/navigation/useNavigationEngine.ts#L322), [offline scope](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/features/offline-maps.md#L98). |
| Parking, fuel, and conditions | Qualify by connected feeds and current road-network matching; remove a blanket OSM fallback promise. | [Parking availability](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/parking/data-source.ts#L152), [OpenConditions boundary](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/openconditions/index.ts#L8). |
| Air quality | Avoid equating supported index standards with every official network being available. | [Provider readiness ledger](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/administration/air-quality-release-status.md#L13). |
| Saved places | Add reviewed imports and per-list exports. Distinguish live/snapshot list links with optional expiry from revocable route snapshots. | [Importer](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/lib/savedPlacesImport/index.ts#L17), [export formats](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/packages/core/src/saved-place-export.ts#L153), [route sharing](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/components/panels/directions/ShareRouteDialog.tsx#L61). |
| OSM corrections | Add supported edits to existing places, linked-account and operator requirements, and public-contribution scope. | [Entry controls](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/web/src/components/panels/place/contributions/OsmContributionEntry.tsx#L26), [supported edits](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/features/osm-contributions.md#L19). |
| Reviews and reports | Distinguish Mangrove reviews from account-free signed road reports requiring an OpenConditions contributions service. | [Review signing](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/packages/mangrove-react/src/useSubmitReview.ts#L74), [report service setup](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/features/crowd-reports.md#L39). |
| Personal timeline | Add a read-only Dawarich viewer, not OpenMapX location recording. | [Day service](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/api/src/services/dawarich/day-service.ts#L206), [collection boundary](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/features/personal-timeline.md#L9). |
| External travel services | Flights, delivery, and most hotel actions open external services. Live hotel rates need configured credentials. | [Flight search](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/flights/index.ts#L6), [delivery links](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/food-delivery/index.ts#L24), [hotel rates](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/integrations/hotels/index.ts#L135). |
| Extensions | Describe declarative integrations and companion services. Do not promise installable arbitrary frontend code or a published standalone SDK. | [Execution boundary](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/administration/community-extensions.md#L17), [frontend restriction](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/developer/building-an-external-extension.md#L232). Three advertised authoring-package names returned npm HTTP 404 during review. |
| Self-hosting | Link prerequisites and data preparation rather than promise a one-command complete stack or fixed hardware figure. | [Requirements](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/install/requirements.md), [generated-stack setup](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/install/getting-started.md). |
| Privacy | No advertising analytics does not mean anonymity or all-local requests. Saved account data is server-readable. | [Direct basemap assets](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/guides/map-tiles.md#L26), [saved-data trust boundary](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/docs/features/saved-places.md#L110). |
| Roadmap and mobile | Remove unsupported historical release dates. Separate native development, backlog ideas, and blocked transit-tracking research. | [Plan status index](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/plans/README.md#L7), [beta evidence](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/apps/mobile/qa/results/beta/README.md#L3), [crowdsource decision](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/docs/plans/2026-07-15-transitous-crowdsource-governance-decision.md#L5). |
| Licenses and marks | Separate the AGPL product, selected Apache libraries, MIT website foundation, and trademark permissions. | [Product licensing](https://github.com/OpenMapX/openmapx/blob/ef896ceae876959180116cf61ffcf643b88ebffe/LICENSING.md), this repository's `LICENSE`, and `/trademark`. |

Browser-install instructions were checked against
[Apple's Home Screen guide](https://support.apple.com/guide/iphone/bookmark-a-website-iph42ab2f3a7/ios)
and [Chrome's web-app guide](https://support.google.com/chrome/answer/9658361).
The legal references were checked against
[DDG § 5](https://www.gesetze-im-internet.de/ddg/__5.html),
[MStV § 18](https://www.gesetze-bayern.de/Content/Document/MStV-18), and
[the GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng).
This does not establish the operator-specific application of those provisions.

## Review corrections

Independent Codex review identified two instructional overclaims: offline
restoration needs navigation to have started online, and live/snapshot plus
expiry controls belong to lists rather than the route-sharing dialog. Both
were checked against the runtime code and corrected. The review also restored
the supported traffic-flow overlay and clarified server-side search processing.

The crawl found that `robots.txt` pointed to a missing sitemap. The new static
sitemap lists the ten existing public pages; future page/post changes must keep
it up to date.

## Operator confirmations

On 23 October 2026, the project owner confirmed that the configured request-log
retention period is enforced, hosting data-processing agreements are in place
where required, and no data protection officer must be designated for this
website. The privacy notice now states those confirmed facts. Their provenance
is the operator's confirmation; this content review did not audit the hosting
contracts or logging infrastructure.

Keep the configured operator identity, contact details, and hosting locations
current. `.env.example` and the README explain that the retention value in the
notice does not itself configure log deletion.

No private environment file, personal address, location archive, or account
content was used in code or screenshots. Rendering uses placeholders unless
synthetic preview values are explicitly supplied.

## Verification boundary

Fresh checks after the final source edits:

- `pnpm check`: no errors or warnings.
- `pnpm test --run`: both existing tests passed.
- `pnpm build`: static build passed. The pre-existing `js-yaml` browser-buffer
  externalization warning remains.
- Parsed all ten generated HTML pages: one H1 and matching description/social
  metadata per page, 123 internal page/fragment links valid, three feeds parsed,
  and all ten sitemap destinations present.
- All 60 cards now contain text in static HTML. Before the markup correction,
  the same probe found all 60 empty across seven pages.
- All 23 external URLs in the generated pages returned HTTP 200.
- Inspected the rendered desktop pages at 1440 × 900 and all ten pages at
  390 × 844. The mobile pass found no horizontal overflow, broken images, or
  invalid dates. Also checked navigation at 1024 × 768, dark-mode features,
  the mobile menu, feature-section anchors, and the renamed page in search.
  The final browser session reported no JavaScript errors.
- Two completed independent Codex reviews covered source accuracy and writing.
  Their substantive findings and supported-content omissions were corrected.

The PR includes comparable before/after screenshots. The package's
existing tests cover a smoke assertion and blog-feed serialization; they do not
prove the truth of product claims. Those were checked separately against source.

No product database, live journey, upstream provider, native device, deployment,
or independent retention-enforcement acceptance is claimed. The retention,
processor-agreement, and DPO facts rely on the operator confirmation above.
There are no source changes in the application repository, dependency updates,
or new design tokens.
