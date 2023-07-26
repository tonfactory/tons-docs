/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    documentation: [
        {
            type: 'doc',
            label: 'Introduction',
            id: 'introduction',
        },
        {
            type: 'doc',
            label: 'Installation',
            id: 'installation',
        },
        {
            type: 'doc',
            label: 'Quick Start',
            id: 'quick-start',
        },
        {
            'type': 'html',
            'value': '<hr/>',
        },
        {
            'type': 'html',
            'value': '<span class=\'menu__link\' style="pointer-events: none;"><b><h3> Entities </h3></b></span>',
        },
        {
            type: 'doc',
            label: 'Config',
            id: 'config',
        },
        {
            type: 'doc',
            label: 'Keystore',
            id: 'keystore',
        },
        {
            type: 'doc',
            label: 'Whitelist',
            id: 'whitelist',
        },
        {
            type: 'doc',
            label: 'Wallet',
            id: 'wallet',
        },
        {
            'type': 'html',
            'value': '<hr/>',
        },
        {
            'type': 'html',
            'value': '<span class=\'menu__link\' style="pointer-events: none;"><b><h3> Features </h3></b></span>',
        },
        {
            type: 'doc',
            label: 'Transfer',
            id: 'transfer',
        },
        {
            type: 'doc',
            label: 'DNS',
            id: 'dns',
        },
        {
            type: 'doc',
            label: 'Jetton (soon)',
            id: 'jetton',
        },
        {
            type: 'doc',
            label: 'Tonconnect (soon)',
            id: 'tonconnect',
        },
        {
            type: 'doc',
            label: 'Development',
            id: 'development',
        },
    ]
};

module.exports = sidebars;
