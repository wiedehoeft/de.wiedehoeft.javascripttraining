'use strict';

const button = {
  handler: null,
  onClick: (handler) => {
    this.handler = handler;
  },

  click: () => {
    this.handler();
  }
};

const log = () => {
  console.log('Button clicked');
};

const handler = {
  handle: () => {
    log();
  }
};

const handlerBindedFunction = handler.handle.bind(handler);
button.onClick(handler.handle);

button.click();
