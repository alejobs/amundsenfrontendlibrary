import { all } from 'redux-saga/effects';

// AnnouncementPage
import { getAnnouncementsWatcher } from "./announcements/sagas";

import {
  addBookmarkWatcher,
  getBookmarksForUserWatcher,
  getBookmarksWatcher,
  removeBookmarkWatcher
} from "ducks/bookmark/sagas";

// Notifications
import { submitNotificationWatcher } from './notification/sagas';

// FeedbackForm
import { submitFeedbackWatcher } from './feedback/sagas';
// PopularTables
import { getPopularTablesWatcher } from './popularTables/sagas';
// SearchPage
import {
  loadPreviousSearchWatcher,
  searchAllWatcher,
  searchResourceWatcher,
  setPageIndexWatcher,
  setResourceWatcher,
  submitSearchWatcher,
  urlDidUpdateWatcher
} from './search/sagas';

// TableDetail
import { updateTableOwnerWatcher } from './tableMetadata/owners/sagas';
import { updateTableTagsWatcher } from './tableMetadata/tags/sagas';
import {
  getTableDataWatcher,
  getColumnDescriptionWatcher,
  getLastIndexedWatcher,
  getPreviewDataWatcher,
  getTableDescriptionWatcher,
  updateColumnDescriptionWatcher,
  updateTableDescriptionWatcher,
} from './tableMetadata/sagas';

// Tags
import { getAllTagsWatcher } from './allTags/sagas';

// User
import { getLoggedInUserWatcher, getUserOwnWatcher, getUserReadWatcher, getUserWatcher } from "./user/sagas";

export default function* rootSaga() {
  yield all([
    // AnnouncementPage
    getAnnouncementsWatcher(),
    // Bookmarks
    addBookmarkWatcher(),
    getBookmarksForUserWatcher(),
    getBookmarksWatcher(),
    removeBookmarkWatcher(),
    // Notification
    submitNotificationWatcher(),
    // FeedbackForm
    submitFeedbackWatcher(),
    // SearchPage
    loadPreviousSearchWatcher(),
    searchAllWatcher(),
    searchResourceWatcher(),
    setPageIndexWatcher(),
    setResourceWatcher(),
    submitSearchWatcher(),
    urlDidUpdateWatcher(),
    // PopularTables
    getPopularTablesWatcher(),
    // Tags
    getAllTagsWatcher(),
    // TableDetail
    getTableDataWatcher(),
    getColumnDescriptionWatcher(),
    getLastIndexedWatcher(),
    getPreviewDataWatcher(),
    getTableDescriptionWatcher(),
    updateColumnDescriptionWatcher(),
    updateTableDescriptionWatcher(),
    updateTableOwnerWatcher(),
    updateTableTagsWatcher(),
    // User
    getLoggedInUserWatcher(),
    getUserWatcher(),
    getUserOwnWatcher(),
    getUserReadWatcher(),
  ]);
}
