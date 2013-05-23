'use strict';

var lock = {
  uri: 'http://api.lelylan.com/devices/2',
  id: '2',
  name: 'Lock',
  categories: ['locks'],
  type: { uri: 'http://api.lelylan.com/types/2', id: '2' },
  physical: { uri: 'http://arduino.house.com/2' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    suggested: {'on': 'On', 'off': 'Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: 'close', expected: 'close', pending: false,
    suggested: {'open': 'Open', 'close': 'Close'}
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var lockType = {
  uri: 'http://api.lelylan.com/types/2',
  id: '2',
  name: 'Lock',
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1',
    name: 'Power',
    default: 'on',
    suggested: {'on': 'On', 'off': 'Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2',
    name: 'Status',
    default: 'close',
    suggested: {'open': 'Open', 'close': 'Closed'},
    type: 'text'
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Open',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'open'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/2',
    id: '2',
    name: 'Close',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: 'close'
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Open',
    function: { uri: 'http://api.lelylan.com/functions/2', id: '2' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['open'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/2',
    id: '2',
    name: 'Closed',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      values: ['close'],
      pending: null,
    }]
  }]
};
