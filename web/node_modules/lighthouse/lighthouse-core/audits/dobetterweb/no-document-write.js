/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * @fileoverview Audit a page to see if it's using document.write()
 */

'use strict';

const ViolationAudit = require('../violation-audit.js');
const i18n = require('../../lib/i18n/i18n.js');

const UIStrings = {
  /** Title of a Lighthouse audit that provides detail on the page's use of the `document.write` API. This descriptive title is shown to users when the page does not use `document.write`. */
  title: 'Avoids `document.write()`',
  /** Title of a Lighthouse audit that provides detail on the page's use of the `document.write` API. This descriptive title is shown to users when the page does use `document.write`. */
  failureTitle: 'Uses `document.write()`',
  /** Description of a Lighthouse audit that tells the user why they should avoid `document.write`. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'For users on slow connections, external scripts dynamically injected via ' +
      '`document.write()` can delay page load by tens of seconds. ' +
      '[Learn more](https://developers.google.com/web/tools/lighthouse/audits/document-write).',
};

const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

class NoDocWriteAudit extends ViolationAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'no-document-write',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['ConsoleMessages'],
    };
  }

  /**
   * @param {LH.Artifacts} artifacts
   * @return {LH.Audit.Product}
   */
  static audit(artifacts) {
    const results = ViolationAudit.getViolationResults(artifacts, /document\.write/);

    /** @type {LH.Audit.Details.Table['headings']} */
    const headings = [
      {key: 'url', itemType: 'url', text: str_(i18n.UIStrings.columnURL)},
      {key: 'label', itemType: 'text', text: str_(i18n.UIStrings.columnLocation)},
    ];
    // TODO(bckenny): see TODO in geolocation-on-start
    const details = ViolationAudit.makeTableDetails(headings, results);

    return {
      score: Number(results.length === 0),
      extendedInfo: {
        value: results,
      },
      details,
    };
  }
}

module.exports = NoDocWriteAudit;
module.exports.UIStrings = UIStrings;
