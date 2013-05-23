'use strict';

var light = {
  uri: 'http://api.lelylan.com/devices/1',
  id: '1',
  name: 'Connected Light',
  type: { uri: 'http://api.lelylan.com/types/1', id: '1' },
  categories: ['lights'],
  physical: { uri: 'http://arduino.house.com/1', id: '1' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    accepted: {'on': 'On', 'off': 'Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: '50', expected: '50', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3', value: '#39fbd9', expected: '#39fbd9', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4', value: '5', expected: '0', pending: false,
    accepted: null
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5', value: '0.5', expected: '0.5', pending: false,
    accepted: null
  }],
  creator_id: '1',
  owner_id: '1',
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Lelylan Demo'
};

var lightType = {
  uri: 'http://api.lelylan.com/types/1',
  id: '1',
  name: 'Light',
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1',
    name: 'Status',
    default: 'off',
    accepted: {'on': 'On', 'off': 'Off'},
    type: 'text'
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2',
    name: 'Intensity',
    default: '0',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 100, step: 1 }
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3',
    name: 'Color',
    default: '#654321',
    accepted: null,
    type: 'color'
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4',
    name: 'Blinking times',
    default: '0',
    accepted: null,
    type: 'number'
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5',
    name: 'Blinking frequency',
    default: '1.0',
    accepted: null,
    type: 'range',
    range: { min: 0, max: 10, step: 0.1 }
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Turn On',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'on'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/2',
    id: '2',
    name: 'Turn Off',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      expected: 'off'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/3',
    id: '3',
    name: 'Set intensity',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      expected: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/4',
    id: '4',
    name: 'Set color',
    properties: [{
      uri: 'http://api.lelylan.com/properties/3',
      id: '3',
      expected: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/5',
    id: '5',
    name: 'Set blinking',
    properties: [{
      uri: 'http://api.lelylan.com/properties/4',
      id: '4',
      expected: null
    }, {
      uri: 'http://api.lelylan.com/properties/5',
      id: '5',
      expected: null
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'Light On',
    function: { uri: 'http://api.lelylan.com/functions/2', id: '2' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      values: ['on'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/2',
    id: '2',
    name: 'Light Off',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      values: ['off'],
      pending: null,
    }]
  }]
};
