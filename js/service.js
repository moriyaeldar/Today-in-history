"use strict";

async function getDateHistory() {
  const date = new Date(Date.now()).toLocaleDateString();
  const month=date.substring(3, 5)
  const day=date.substring(0, 2)
  const res = await $.get(`http://history.muffinlabs.com/date/${month}/${day}`);
  return res;
}
