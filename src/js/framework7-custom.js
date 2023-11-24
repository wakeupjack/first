
import Framework7, { utils, getDevice, createStore } from 'framework7';
import Popup from 'framework7/components/popup';
import Popover from 'framework7/components/popover';
import Sheet from 'framework7/components/sheet';
import ListIndex from 'framework7/components/list-index';
import Tabs from 'framework7/components/tabs';
import Panel from 'framework7/components/panel';
import Card from 'framework7/components/card';
import Form from 'framework7/components/form';
import Input from 'framework7/components/input';
import Checkbox from 'framework7/components/checkbox';
import Range from 'framework7/components/range';
import InfiniteScroll from 'framework7/components/infinite-scroll';
import PullToRefresh from 'framework7/components/pull-to-refresh';
import Searchbar from 'framework7/components/searchbar';
import PhotoBrowser from 'framework7/components/photo-browser';
import Notification from 'framework7/components/notification';
import Skeleton from 'framework7/components/skeleton';

Framework7.use([
  Popup,
  Popover,
  Sheet,
  ListIndex,
  Tabs,
  Panel,
  Card,
  Form,
  Input,
  Checkbox,
  Range,
  InfiniteScroll,
  PullToRefresh,
  Searchbar,
  PhotoBrowser,
  Notification,
  Skeleton
]);

export default Framework7;
export { utils, getDevice, createStore };
