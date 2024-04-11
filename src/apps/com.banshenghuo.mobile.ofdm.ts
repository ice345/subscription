import { defineAppConfig } from '../types';

const jsonData1 = {
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
    {
      key: 0,
      name: '得物',
      rules: '[text*="得物"] + 1 * > @[name="android.widget.ImageView"][id="null"][clickable=false]',
      snapshotUrls: [
        'https://i.gkd.li/i/14945436'
      ]
    }
  ]
};

const jsonData2 = {
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
    {
      key: 0,
      name: '反馈',
      rules: '[text*="反馈"] + 1 * > @[name="android.widget.ImageView"][id="com.banshenghuo.mobile.ofdm:id/anythink_myoffer_btn_close_id"]',
      snapshotUrls: [
        'https://i.gkd.li/i/14945555'
      ]
    }
  ]
};

const jsonData3 = {
  id: 'com.banshenghuo.mobile.ofdm',
  name: 'OmoFun',
  groups: [
    {
      key: 0,
      name: '得物',
      rules: 'FrameLayout[childCount=3]>@ImageView[id="null"][clickable=false]+[text*="得物"]+View',
      snapshotUrls: [
        'https://i.gkd.li/i/14945556'
      ]
    }
  ]
};

export default [
  defineAppConfig(jsonData1),
  defineAppConfig(jsonData2),
  defineAppConfig(jsonData3)
];
