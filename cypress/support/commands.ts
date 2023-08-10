import "../e2e/contexts/user/commands";
import "../e2e/contexts/torrent/commands";
import { RegistrationForm } from "../e2e/contexts/user/registration";
import { TestTorrentInfo } from "cypress/e2e/contexts/torrent/test_torrent_info";

declare global {
  namespace Cypress {
    interface Chainable {
      // User: Registration
      register(registration_form: RegistrationForm): Chainable<void>
      register_as_admin(registration_form: RegistrationForm): Chainable<void>
      delete_user(username: string): Chainable<void>
      // User: Authentication
      login(username: string, password: string): Chainable<void>
      logout(): Chainable<void>
      // Torrent
      upload_torrent(torrent_info: TestTorrentInfo): Chainable<void>
      delete_torrent(torrent_info: TestTorrentInfo, infohash: string): Chainable<void>
    }
  }
}
