import { describe, expect, it } from 'vitest';
import { feed } from './index';

describe('blog feed', () => {
  it('renders every supported format with valid item identifiers', () => {
    expect(() => feed.atom1()).not.toThrow();
    expect(() => feed.rss2()).not.toThrow();
    expect(() => feed.json1()).not.toThrow();
    expect(feed.atom1()).toContain('urn:uuid:');
  });
});
